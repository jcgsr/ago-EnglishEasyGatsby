import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, image }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`;

//import React from "react";

//import { Helmet } from "react-helmet";
//import { useStaticQuery, graphql } from "gatsby";

//const SEO = ({ description, image, title, siteUrl }) => {
//const { site } = useStaticQuery(query);
//const metaDescription = description || site.siteMetadata.description;
//const metaImage = image || site.siteMetadata.image;
//return (
//<Helmet
//htmlAttributes={{ lang: "pt-BR" }}
//title={`${title} | ${site.siteMetadata.title}`}
//meta={[
//{ name: `description`, content: metaDescription },
//{
//name: `keywords`,
//content:
//"Inglês, Gramática Inglesa, Sexto Ano, Sétimo Ano, Oitavo, Ano, Nono Ano, Ensino Fundamental Maior",
//},
//{ name: `image`, content: { metaImage } },
//{ property: `og:title`, content: title },
//{ property: `og:description`, content: description },
//{ property: `og:siteUrl`, content: siteUrl },
//{ property: `og:image`, content: { metaImage } },
//{ name: `twitter:card`, content: "summary_large_image" },
//{ name: `twitter:title`, content: title },
//{ name: `twitter:description`, content: description },
//{ name: `twitter:image`, content: { metaImage } },
//]}
//></Helmet>
//);
//};

//const query = graphql`
//{
//site {
//siteMetadata {
//description
//siteUrl
//image
//title
//}
//}
//}
//`;
//export default SEO;
