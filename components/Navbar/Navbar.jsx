import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Elementum</h2>
      </div>

      <ul className="nav-links">
        <li><b>Home</b></li>
        <li><b>Studio</b></li>
        <li><b>Services</b></li>
        <li><b>Contact</b></li>
        <li><b>FAQs</b></li>
      </ul>

      <button className="menu-btn">
        ☰
      </button>
    </nav>
  );
}

export default Navbar;