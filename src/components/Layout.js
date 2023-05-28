import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

import { useStaticQuery, graphql } from "gatsby";

import CookieConsent from "react-cookie-consent";

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
      <CookieConsent buttonText="Entendi">
        Este site usa cookies para melhorar a experiência do usuário.
      </CookieConsent>
      <Footer />
    </>
  );
};

export default Layout;
