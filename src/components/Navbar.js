import React, { useState } from "react";
import { RiArrowDownSFill, RiMenuFill, RiCloseFill } from "react-icons/ri";
import { Link, graphql } from "gatsby";
import nonoDados from "../constants/nonoDados.js";
import oitavoDados from "../constants/oitavoDados.js";
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

const query = graphql`
  {
    allFile {
      nodes {
        name
      }
    }
  }
`;
export default Navbar;
