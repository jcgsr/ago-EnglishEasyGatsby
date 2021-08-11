import React from "react";
import Layout from "../../components/Layout";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const NonoAssuntos = ({ data }) => {
  return (
    <Layout>
      <h1>{data.mdx.frontmatter.title}</h1>
      <div className="card">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default NonoAssuntos;
