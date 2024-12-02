const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9",
      period: "per month",
      features: [
        "Up to 5 users",
        "Basic analytics",
        "24/7 support",
        "1GB storage"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      features: [
        "Up to 20 users",
        "Advanced analytics",
        "Priority support",
        "10GB storage",
        "Custom integrations"
      ],
      cta: "Try Pro",
      highlighted: true
    },
    {
      name: "Premium",
      price: "$99",
      period: "per month",
      features: [
        "Unlimited users",
        "Enterprise analytics",
        "Dedicated support",
        "Unlimited storage",
        "Custom integrations",
        "Advanced security"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <section className="pricing">
      <div className="pricing-header">
        <h2 className="pricing-title">Simple, Transparent Pricing</h2>
        <p className="pricing-subtitle">
          Choose the perfect plan for your business needs
        </p>
      </div>
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
          >
            <h3 className="plan-name">{plan.name}</h3>
            <div className="plan-price">
              <span className="amount">{plan.price}</span>
              <span className="period">{plan.period}</span>
            </div>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className={`plan-cta ${plan.highlighted ? 'highlighted' : ''}`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
