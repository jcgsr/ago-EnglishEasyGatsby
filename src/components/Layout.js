import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

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
      <Footer />
    </>
  );
};

export default Layout;
