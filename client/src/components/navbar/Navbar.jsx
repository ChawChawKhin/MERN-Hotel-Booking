import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    dispatch({ type: "LOGOUT" });
  };

  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">booking clone</span>
        </Link>
        {user ? (
          <div className="navItems">
            <span>{user.username}</span>
            <button onClick={handleLogoutClick} className="navButton">
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
