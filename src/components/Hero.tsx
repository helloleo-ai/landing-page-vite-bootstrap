const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to the Future</h1>
        <p className="hero-description">
          Transform your digital experience with our cutting-edge solutions. 
          Discover how we can help you achieve your goals.
        </p>
        <button className="hero-cta">Get Started</button>
      </div>
      <div className="hero-image">
        <div className="image-placeholder">
          {/* Placeholder for illustration */}
          <span>Hero Image</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
