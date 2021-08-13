import React from "react";
import Layout from "../../../components/Layout";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

const NonoAssuntos = ({
  data,
  data: {
    mdx: {
      frontmatter: { variant },
    },
  },
}) => {
  return (
    <MDXProvider>
      <Layout>
        <h1>{data.mdx.frontmatter.title}</h1>
        <div className="card">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </Layout>
    </MDXProvider>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        variant
      }
      body
    }
  }
`;

export default NonoAssuntos;
