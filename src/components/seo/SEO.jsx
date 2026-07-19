import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  image = "https://www.shminfinity.fi/images/og-image.jpg",
  url = "https://www.shminfinity.fi",
}) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={keywords}
      />

      <link
        rel="canonical"
        href={url}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:image"
        content={image}
      />

      <meta
        property="og:url"
        content={url}
      />

      <meta
        property="twitter:card"
        content="summary_large_image"
      />

      <meta
        property="twitter:title"
        content={title}
      />

      <meta
        property="twitter:description"
        content={description}
      />

      <meta
        property="twitter:image"
        content={image}
      />
    </Helmet>
  );
};

export default SEO;