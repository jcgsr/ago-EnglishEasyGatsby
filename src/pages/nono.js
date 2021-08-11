import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
const Nono = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div>
        {data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <MDXRenderer>{node.body}</MDXRenderer>
          </article>
        ))}
      </div>
    </Layout>
  );
};
export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
        }
        id
        body
      }
    }
  }
`;
export default Nono;
