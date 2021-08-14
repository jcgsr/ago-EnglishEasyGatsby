import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <p>
        <strong>&copy; {new Date().getFullYear()} - English?! Easy...</strong>
      </p>
      <p>Todos os direitos reservados</p>
    </footer>
  );
};

export default Footer;
