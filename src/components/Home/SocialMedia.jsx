import React from "react";
import './Home.css'




export const SocialMedia = () => {
  return (
    <div className="social">
      <a
        href="http://linkedin.com/in/michelle-setubal"
        className="link"
        target="_blank" rel="noreferrer"
        
      >
        <i className="fab fa-linkedin-in"></i>
        
      </a>
      <a
        href="http://github.com/missetubal"
        className="link"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="http://instagram.com/missetubal"
        className="link"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  );
};
