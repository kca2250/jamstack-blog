import Head from "next/head";

type Props = {
  title: string;
  description: string;
  url: string;
  type: string;
  imageUrl: string;
};

export function HeadMeta(props: Props) {
  const { title, description, url, type, imageUrl } = props;

  return (
    <Head>
      <title>{`${title} | biii_grrr`}</title>

      {/* ogp setting */}
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={imageUrl} />

      {/* twitter ogp */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@kca2250" />
      <meta name="twitter:creator" content="@kca2250" />
    </Head>
  );
}
