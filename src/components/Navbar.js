import React, { useState } from "react";
import { RiArrowDownSFill, RiMenuFill, RiCloseFill } from "react-icons/ri";
import { Link } from "gatsby";
import nonoDados from "../constants/nonoDados.js";
import oitavoDados from "../constants/oitavoDados.js";
import setimoDados from "../constants/setimoDados.js";
import sextoDados from "../constants/sextoDados.js";
function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <Link to="/">
        <p>English?! Easy</p>
      </Link>
      <div className={`${showLinks ? "links-container" : "links-containerN"}`}>
        <ul>
          <li className="dropdown">
            6º ano <RiArrowDownSFill />
            <div className="dropdown-ct">
              {sextoDados.map(item => {
                const { id, url, text } = item;
                return (
                  <span key={id}>
                    <Link to={url}>{text}</Link>
                  </span>
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
                  <span key={id}>
                    <Link to={url}>{text}</Link>
                  </span>
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
                  <span key={id}>
                    <Link to={url}>{text}</Link>
                  </span>
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
                  <span key={id}>
                    <Link to={url}>{text}</Link>
                  </span>
                );
              })}
            </div>
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
