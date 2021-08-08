import React, { useState } from "react";
import { RiArrowDownSFill, RiMenuFill, RiCloseFill } from "react-icons/ri";
import { Link } from "gatsby";
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
          <li>
            9º ano <RiArrowDownSFill />
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
