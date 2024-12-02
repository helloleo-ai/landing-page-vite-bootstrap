interface NavLinkProps {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
}

const NavLink = ({ href, isActive = false, children }: NavLinkProps) => {
  return (
    <a
      href={href}
      className={`nav-link ${isActive ? 'active' : ''}`}
    >
      {children}
    </a>
  );
};

export default NavLink;
