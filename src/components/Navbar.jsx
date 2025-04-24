import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="Name">𝑨𝒃𝒉𝒊𝒏𝒂𝒘</h1>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>  {/* This one */}
        <Link to="/contact">Contact</Link>
      </div>
      
    </nav>
  );
}

export default Navbar;
