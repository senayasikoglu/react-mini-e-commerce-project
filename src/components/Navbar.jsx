import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header>
            <h1>Glow Essence</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <span>|</span>
                <NavLink to="/sidebar">Sidebar</NavLink>
                <span>|</span>
                <NavLink to="/about">About</NavLink>
            </nav>
        </header>
    )
}

export default Navbar; 