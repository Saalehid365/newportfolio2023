import React from "react";

export default function Lsb() {
  return (
    <div className="left-sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        <span className="designation ">Front end developer</span>
      </div>
      <img className="me" src="./assets/images/me.jpg" alt="Me" />
      <h2 className="email">anelson2711@gmail.com</h2>
      <h2 className="address">Birmingham, UK</h2>
      <p className="copyright">&copy; 2022 Drake. All Rights Reserved</p>
      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        <li>
          <a href="https://twitter.com/idevelop365">
            <i className="lab la-twitter"></i>
          </a>
        </li>

        <li>
          <a href="https://github.com/saalehid365">
            <i className="lab la-github"></i>
          </a>
        </li>
      </ul>
      <a href="#" className="theme-btn">
        <i className="las la-envelope"></i> Contact me!
      </a>
    </div>
  );
}
