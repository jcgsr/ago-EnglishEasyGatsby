import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import { Link } from "gatsby";

const ErrorPage = () => {
  return (
    <Layout>
      <SEO title="404" description="Essa página não existe" />

      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>Essa página não existe</h3>
          <Link className="btn" to="/">
            Início
          </Link>
        </section>
      </main>
    </Layout>
  );
};

export default ErrorPage;
