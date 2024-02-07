import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="Header">
      <h1>Glow Essence</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sidebar">Sidebar</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
