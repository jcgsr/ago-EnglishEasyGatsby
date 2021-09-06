import React, { useState } from "react";
import { RiArrowDownSFill, RiMenuFill, RiCloseFill } from "react-icons/ri";
import { Link } from "gatsby";
import nonoDados from "../constants/nonoDados.js";
import oitavoDados from "../constants/oitavoDados.js";
import setimoDados from "../constants/setimoDados.js";
import sextoDados from "../constants/sextoDados.js";

import logo from "../assets/img/logo.svg";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <Link to="/">
        <img
          src={logo}
          alt="Logo do site"
          style={{ height: "2.5rem" }}
          id="logo"
        />
      </Link>
      <div className={`${showLinks ? "links-container" : "links-containerN"}`}>
        <ul>
          <li className="dropdown">
            6º ano <RiArrowDownSFill />
            <div className="dropdown-ct">
              {sextoDados.map(item => {
                const { id, url, text } = item;
                return (
                  <Link key={id} to={url}>
                    <button>{text}</button>
                  </Link>
                );
              })}
            </div>
          </li>
          <li className="dropdown">
            7º ano <RiArrowDownSFill />
            <div className="dropdown-ct">
              {setimoDados.map(item => {
                const { id, url, text } = item;
                return (
                  <Link key={id} to={url}>
                    <button>{text}</button>
                  </Link>
                );
              })}
            </div>
          </li>
          <li className="dropdown">
            8º ano <RiArrowDownSFill />
            <div className="dropdown-ct">
              {oitavoDados.map(item => {
                const { id, url, text } = item;
                return (
                  <Link key={id} to={url}>
                    <button>{text}</button>
                  </Link>
                );
              })}
            </div>
          </li>
          <li className="dropdown">
            9º ano <RiArrowDownSFill />
            <div className="dropdown-ct">
              {nonoDados.map(item => {
                const { id, url, text } = item;
                return (
                  <Link key={id} to={url}>
                    <button>{text}</button>
                  </Link>
                );
              })}
            </div>
          </li>
          <li id="calculadora">
            <Link to="/calculadora">calculadora de média</Link>
          </li>
        </ul>{" "}
      </div>
      <button onClick={() => setShowLinks(!showLinks)} className="nav-toggle">
        {showLinks ? <RiCloseFill /> : <RiMenuFill />}
      </button>
    </nav>
  );
}

export default Navbar;
