interface NavLinkProps {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, isActive = false, children, onClick }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClick) onClick();
  };

  return (
    <a
      href={href}
      className={`nav-link ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default NavLink;
