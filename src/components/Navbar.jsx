import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isNavClicked, setIsNavClickded] = useState(false);

  const toggleSidebar = () => {
    setIsNavClickded(!isNavClicked)
  }

  return (
    <>
      <h1>Glow Essence</h1>

      <header className="header">
        <button className="menu-icon" onClick={toggleSidebar}>
          {!isNavClicked && (
            <span className="material-symbols-outlined">
              menu
            </span>
          )}
        </button>
        {isNavClicked && (
          <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
        )}
      </header>
    </>
  );
}

export default Navbar;
