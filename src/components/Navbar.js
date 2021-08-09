import React, { useState } from "react";
import { RiArrowDownSFill, RiMenuFill, RiCloseFill } from "react-icons/ri";
import { Link } from "gatsby";
import nono from "../constants/nono.js";
function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <Link to="/">
        <p>English?! Easy</p>
      </Link>
      <div className={`${showLinks ? "links-container" : "links-containerN"}`}>
        <ul>
          <li>
            6º ano <RiArrowDownSFill />
          </li>
          <li>
            7º ano <RiArrowDownSFill />
          </li>
          <li>
            8º ano <RiArrowDownSFill />
          </li>
          <li className="dropdown">
            9º ano <RiArrowDownSFill cclassName="dropdown-trigger" />
            <div className="dropdown-ct">
              {nono.map(item => {
                const { id, url, text } = item;
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                );
              })}
              <a href="">sdfgsdfgsdggfg</a>
              <a href="">sdfg</a>
              <a href="">sdg</a>
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
