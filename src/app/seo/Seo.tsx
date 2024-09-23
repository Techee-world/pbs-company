import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  twitterHandle?: string;
}

const Seo = ({ title, description, keywords, url, image, twitterHandle }:SEOProps) => {
  const defaultTitle = "PBS Group";
  const defaultDescription = "PBS Group provides professional business services tailored to your needs.";
  const defaultKeywords = "Business Services, PBS Group, Consulting,pbs , pbsgroup , business training , business developement , individul training ";
  const defaultUrl = "https://pbsgroup.in";
  const defaultImage = "/images/og-image.jpg"; // Add a default image
  const defaultTwitterHandle = "@PBSGroup";

  return (
    <Head>
      <title>{title ? `${title} | PBS Group` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta property="og:title" content={title ? `${title} | PBS Group` : defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle || defaultTwitterHandle} />
      <meta name="twitter:title" content={title ? `${title} | PBS Group` : defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
      <link rel="canonical" href={url || defaultUrl} />
    </Head>
  );
};

export default Seo;
