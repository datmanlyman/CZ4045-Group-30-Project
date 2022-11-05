import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Glassdoor Analysis
      </Link>
      <ul>
        <CustomLink to="/dashboard">Dashboard</CustomLink>
      </ul>
    </nav>
  );
}
