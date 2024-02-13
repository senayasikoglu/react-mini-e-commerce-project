import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isNavClicked, setIsNavClickded] = useState(false);

  const toggleSidebar = () => {
    setIsNavClickded(!isNavClicked)
  }

  return (
    <>
      <div className="main-title">
        <h1>Glow Essence</h1>
        <h3>Shop online</h3>
      </div>
      <div className="menu-container">

        <div className="menu">
          <span className="material-symbols-outlined" onClick={toggleSidebar}>Menu
          </span>
          {isNavClicked && (
            <nav className="navbar">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
            </nav>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
