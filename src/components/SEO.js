import React from "react";

// import image from "../assets/img/brEflag.jpg";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ description, image, title, siteUrl }) => {
  const { site } = useStaticQuery(query);
  const metaDescription = description || site.siteMetadata.description;
  return (
    <Helmet
      htmlAttributes={{ lang: "pt-BR" }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[
        { name: `description`, content: metaDescription },
        {
          name: `keywords`,
          content:
            "Inglês, Gramática Inglesa, Sexto Ano, Sétimo Ano, Oitavo, Ano, Nono Ano, Ensino Fundamental Maior",
        },
        { name: `image`, content: { image } },
        { property: `og:title`, content: title },
        { property: `og:description`, content: description },
        { property: `og:siteUrl`, content: siteUrl },
        { property: `og:image`, content: { image } },
        { name: `twitter:card`, content: "summary_large_image" },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: description },
        { name: `twitter:image`, content: { image } },
      ]}
    ></Helmet>
  );
};

const query = graphql`
  {
    site {
      siteMetadata {
        description
        siteUrl
        image
        title
      }
    }
  }
`;
export default SEO;
