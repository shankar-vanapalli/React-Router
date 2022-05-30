import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

function Navbar() {
  const NavLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline"
    };
  };

  const auth = useAuth();

  return (
    <nav>
      <NavLink style={NavLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink style={NavLinkStyle} to="/about">
        About
      </NavLink>
      <NavLink style={NavLinkStyle} to="/products">
        Products
      </NavLink>
      <NavLink style={NavLinkStyle} to="/profile">
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink style={NavLinkStyle} to="/login">
          Login
        </NavLink>
      )}
    </nav>
  );
}

export default Navbar;
