import { useState } from "react";
import "./navbar.css";

export default function Nav_bar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="logo">
        <img src="https://logopond.com/logos/88ebd3bee0a73daa733e824809d77759.png" width={50}/>
      </a>
      <button
        className="menu"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/detalii">Detalii</a>
          </li>
          <li>
            <a href="/cules">Adauga Cantitate</a>
          </li>
          <li>
            <a href="/total">Total Cules</a>
          </li>
          <li>
            <a href="/fertilizare">Fertilizare</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
