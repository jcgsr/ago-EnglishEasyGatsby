import React from "react";

import Layout from "../components/Layout";

import { StaticImage } from "gatsby-plugin-image";
const Home = () => {
  return (
    <Layout>
      <h1>English?! Easy...</h1>
      <section id="site-desc">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </section>
      <div id="brE-flag">
        <StaticImage
          alt="Bandeira britânica"
          src="../assets/img/brEflag.jpg"
          layout="constrained"
          placeholder="blurred"
        />
      </div>
    </Layout>
  );
};

export default Home;
