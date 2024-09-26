import React from 'react'
import "./Header.css";
import BackgroundAnimation from '../animation/BackgroundAnimation';


function Header() {
  return (
    <>
      <header>
        <img src="../src/assets/payqubitlogo.png" alt="" />
        <div className="sections">
          <nav>
            <ul className= "links">
              <li>
                <a href="">Industrias y Verticales</a>
              </li>
              <li>
                <a href="">Soporte</a>
              </li>
              <li>
                <a href="">Core Team</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <BackgroundAnimation/>
    </>
  );
}


export default Header;