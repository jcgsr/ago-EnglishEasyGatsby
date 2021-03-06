import React from "react";
import Layout from "../../../components/Layout";
import Seo from "../../../components/Seo";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const NonoAssuntos = ({
  data,
  data: {
    mdx: {
      frontmatter: { variant },
    },
  },
}) => {
  const image = getImage(data.mdx.frontmatter.image);
  return (
    <MDXProvider>
      <Layout>
        <Seo
          title={data.mdx.frontmatter.title}
          description={data.mdx.frontmatter.description}
        />
        <h1>{data.mdx.frontmatter.title}</h1>
        <main className="card">
          <GatsbyImage image={image} alt={data.mdx.frontmatter.alt_image} />
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </main>
      </Layout>
    </MDXProvider>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        variant
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
        image_alt
      }
      body
    }
  }
`;

export default NonoAssuntos;
