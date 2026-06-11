import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 shadow">
      <div className="flex gap-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}
