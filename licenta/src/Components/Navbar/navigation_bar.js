import { useState, useRef } from "react";
import { FaBars, FaTimes} from "react-icons/fa";
import "./navbar.css";

function Nav_bar(){
    const navRef=useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <header>
            <h3>Afine Oprea</h3>
            <nav ref={navRef}>
                <a href="/"> Home </a>
                <a href="/probleme"> Probleme </a>
                <a href="/cules"> Adauga Cantitate Culeasa </a>
                <a href="/total"> Total cules </a>
                <a href="/fertilizare"> Tabele Fertilizare </a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
                <a href="/login"> LOGIN </a>

            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}


export default Nav_bar;



// export default function Nav_bar() {
//   const [isNavExpanded, setIsNavExpanded] = useState(false);

//   return (
//     <nav className="navigation">
//       <a href="/" className="logo">
//         <img src="https://logopond.com/logos/88ebd3bee0a73daa733e824809d77759.png" width={100}/>
//       </a>
//       <button
//         className="menu"
//         onClick={() => {
//           setIsNavExpanded(!isNavExpanded);
//         }}
//       >
//         {/* icon from Heroicons.com */}
//       </button>
//       <div
//         className={
//           isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
//         }
//       >
//         <ul>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/detalii">Probleme</a>
//           </li>
//           <li>
//             <a href="/cules">Adauga Cantitate Culeasa</a>
//           </li>
//           <li>
//             <a href="/total">Total Cules</a>
//           </li>
//           <li>
//             <a href="/fertilizare">Fertilizare</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }
