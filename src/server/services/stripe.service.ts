// src/server/services/stripe.service.ts

import { supabaseAdmin } from '@/lib/supabase/admin';
import { PRICE_PLAN_MAP } from '@/lib/stripe/plan-map';

export async function upsertSubscription(stripeSubscription: any) {
  const customerId = stripeSubscription.customer as string;
  const subscriptionId = stripeSubscription.id;
  
  // 1. Find user by stripe_customer_id in our DB
  const { data: subData, error: subError } = await supabaseAdmin
    .from('subscriptions')
    .select('user_id')
    .eq('stripe_customer_id', customerId)
    .single();

  if (subError || !subData) throw new Error('Customer mapping not found');

  const priceId = stripeSubscription.items.data[0].price.id;
  const plan = PRICE_PLAN_MAP[priceId] || 'free';

  // 2. Sync to DB
  await supabaseAdmin.from('subscriptions').upsert({
    user_id: subData.user_id,
    stripe_customer_id: customerId,
    stripe_subscription_id: subscriptionId,
    plan: plan,
    status: stripeSubscription.status,
    current_period_end: new Date(stripeSubscription.current_period_end * 1000).toISOString(),
    updated_at: new Date().toISOString(),
  });
}