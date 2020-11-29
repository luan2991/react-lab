import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header(props) {
  return (
    <div className="header">
      <ul className="header_menu">
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/color-box">Color Box</NavLink>
        </li>
        <li>
          <NavLink exact to="/magic-box">Magic Box</NavLink>
        </li>
        <li>
          <NavLink  exact to="/counter">Counter</NavLink>
        </li>
        <li>
          <NavLink  exact to="/students">Students</NavLink>
        </li>
        <li>
          <a  href="https://mp3.zing.vn/" target="_blank" rel="noopener noreferrer">go to zingmp3</a>
        </li>
      </ul>    
    </div>
  );
}

export default Header;
