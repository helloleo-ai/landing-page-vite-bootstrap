const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Terms of Service</a>
        </div>
        <div className="footer-social">
          <a href="#" className="footer-social-link">LinkedIn</a>
          <a href="#" className="footer-social-link">Twitter</a>
          <a href="#" className="footer-social-link">GitHub</a>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
