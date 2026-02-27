// src/lib/stripe/plan-map.ts

export const PRICE_PLAN_MAP: Record<string, 'pro' | 'team'> = {
  [process.env.STRIPE_PRO_PRICE_ID!]: 'pro',
  [process.env.STRIPE_TEAM_PRICE_ID!]: 'team',
};
