export const getPlans = async (_req, res) => {
  res.json({
    plans: [
      {
        id: 'free',
        name: 'Free',
        price: '$0',
        interval: 'forever',
        description: 'Public signals, dashboard access, and your personal trading journal.',
        features: ['Public trade signals', 'Trading journal', 'Basic education access'],
        cta: 'Current entry tier'
      },
      {
        id: 'vip',
        name: 'VIP',
        price: '$49',
        interval: 'per month',
        description: 'Unlock premium signals, VIP videos, and priority member access.',
        features: ['VIP signals', 'VIP education vault', 'Priority community positioning'],
        cta: 'Upgrade to VIP'
      }
    ]
  });
};

export const createCheckoutSession = async (req, res) => {
  const paymentLink = process.env.STRIPE_PAYMENT_LINK_VIP_MONTHLY;

  if (!paymentLink || paymentLink.includes('replace-this-link') || paymentLink.includes('test_example')) {
    return res.status(503).json({
      message: 'Stripe payment link is not configured yet'
    });
  }

  res.json({
    checkoutUrl: paymentLink,
    plan: req.body.plan || 'vip'
  });
};

export const createPortalSession = async (_req, res) => {
  const portalUrl = process.env.STRIPE_CUSTOMER_PORTAL_URL;

  if (!portalUrl || portalUrl.includes('replace-this-link') || portalUrl.includes('/example')) {
    return res.status(503).json({
      message: 'Stripe billing portal is not configured yet'
    });
  }

  res.json({ portalUrl });
};
