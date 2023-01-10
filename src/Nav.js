import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom"
import './Nav.css';
import logo from './image/logo.png';
function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className="nav_contents">
        <img onClick={()=>  navigate('/')} className="nav_logo" src={logo} alt="" />
        <img
          className="nav_avatar"
          onClick={()=>  navigate('/profile')}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
