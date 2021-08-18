import { NavLink } from "react-router-dom";
import './styles/navbar.css';

export default function Navbar() {
  return (
    <nav>
        <h2>Portfolio</h2>
      <ul>
        <li>
          <a>
           Contact
          </a>
        </li>
        <li>
          <a>
           Projects 
          </a>
        </li>
        <li>
          <a>
           Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
