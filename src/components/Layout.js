import React from "react";

import Navbar from "./Navbar";

import { useStaticQuery, graphql } from "gatsby";

import "normalize.css";
import "../assets/css/main.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  console.log(data);

  return (
    <>
      <Navbar />
      {}
      {children}
    </>
  );
};

export default Layout;
