// src/server/actions/stripe.actions.ts

'use server';

import { stripe } from '@/lib/stripe/client';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export async function createCheckoutSession(priceId: string) {
  const supabase = createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/login');

  // Check for existing customer ID
  const { data: sub } = await supabase
    .from('subscriptions')
    .select('stripe_customer_id')
    .eq('user_id', user.id)
    .single();

  let customerId = sub?.stripe_customer_id;

  if (!customerId) {
    const customer = await stripe.customers.create({
      email: user.email,
      metadata: { supabase_user_id: user.id }
    });
    customerId = customer.id;
    
    // Initial record to link user and customer
    const adminClient = (await import('@/lib/supabase/admin')).supabaseAdmin;
    await adminClient.from('subscriptions').insert({
      user_id: user.id,
      stripe_customer_id: customerId,
      plan: 'free',
      status: 'none'
    });
  }

  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: 'subscription',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?canceled=true`,
  });

  if (!session.url) throw new Error('Failed to create session');
  
  redirect(session.url);
}