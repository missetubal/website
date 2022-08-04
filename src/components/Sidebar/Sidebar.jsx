import React, { useState } from "react";
import "./Sidebar.css";


export const Sidebar = () => {
  const[showMenu, setShowMenu] = useState(false)
  return (
    <>
    <aside className={showMenu ? 'show-menu' : 'aside'}>
      <a href="#home">
        <img
          className="logo"
          src={"https://cdn-icons-png.flaticon.com/512/594/594324.png"}
          alt=""
        />
      </a>
      <nav className="nav">
        <div className="nav_menu">
          <ul className="nav_list">
            <li className="nav_item">
              <a href="#home" className="nav_link">
                <i className="icon-home"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="icon-user-following"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#services" className="nav_link">
                <i className="icon-briefcase"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#resume" className="nav_link">
                <i className="icon-graduation"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i className="icon-bubbles"></i>
              </a>
            </li>
            
          </ul>
        </div>
      </nav>
      <div className="nav_footer">
        <span className="copy">
          <i className="far fa-copyright">2022-2023</i>
        </span>
      </div>
    </aside>

    <div className={showMenu ? 'nav_toggle nav_toggle-open' : 'nav_toggle'} onClick={()=> setShowMenu(!showMenu)}>
      <i className="icon-menu" ></i>
    </div>
    </>
  );
};
