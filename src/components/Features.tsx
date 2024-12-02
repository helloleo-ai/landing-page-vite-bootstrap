const Features = () => {
  const features = [
    {
      title: "Easy Integration",
      description: "Seamlessly integrate our solutions into your existing workflow with minimal setup required.",
      icon: "🔌"
    },
    {
      title: "Real-time Analytics",
      description: "Get instant insights with our powerful analytics dashboard and reporting tools.",
      icon: "📊"
    },
    {
      title: "Secure Platform",
      description: "Enterprise-grade security ensuring your data is protected at all times.",
      icon: "🔒"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you whenever you need assistance.",
      icon: "💬"
    },
    {
      title: "Cloud Storage",
      description: "Unlimited cloud storage with automatic backup and synchronization.",
      icon: "☁️"
    },
    {
      title: "Smart Automation",
      description: "Automate repetitive tasks and boost your team's productivity.",
      icon: "⚡"
    }
  ];

  return (
    <section id="features" className="features">
      <div className="features-header">
        <h2 className="features-title">Powerful Features</h2>
        <p className="features-subtitle">
          Everything you need to take your business to the next level
        </p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
