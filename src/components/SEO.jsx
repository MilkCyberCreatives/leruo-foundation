import Head from 'next/head';
import { buildStructuredData, getPageSeo, siteConfig } from '@/lib/seo';

export default function SEO({ pathname = '/' }) {
  const seo = getPageSeo(pathname);
  const pageUrl = seo.path === '/' ? siteConfig.siteUrl : `${siteConfig.siteUrl}${seo.path}`;
  const structuredData = buildStructuredData(pathname);
  const robotsContent = seo.noindex
    ? 'noindex,nofollow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
    : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';

  const verificationTags = [
    { name: 'google-site-verification', content: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
    { name: 'msvalidate.01', content: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION },
    { name: 'yandex-verification', content: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION },
    { name: 'facebook-domain-verification', content: process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION },
  ].filter((tag) => tag.content);

  return (
    <Head>
      <title>{seo.metaTitle}</title>
      <meta name="description" content={seo.description} key="description" />
      <meta name="keywords" content={seo.keywords.join(', ')} key="keywords" />
      <meta name="author" content={siteConfig.organizationName} key="author" />
      <meta name="creator" content={siteConfig.organizationName} key="creator" />
      <meta name="publisher" content={siteConfig.organizationName} key="publisher" />
      <meta name="robots" content={robotsContent} key="robots" />
      <meta name="googlebot" content={robotsContent} key="googlebot" />
      <meta name="geo.region" content={siteConfig.geo.region} key="geo.region" />
      <meta name="geo.placename" content={siteConfig.geo.placename} key="geo.placename" />
      <meta name="geo.position" content={`${siteConfig.geo.latitude};${siteConfig.geo.longitude}`} key="geo.position" />
      <meta name="ICBM" content={`${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`} key="ICBM" />
      <link rel="canonical" href={pageUrl} key="canonical" />
      <link rel="alternate" hrefLang="en-ZA" href={pageUrl} key="alternate-en-za" />
      <link rel="alternate" hrefLang="x-default" href={pageUrl} key="alternate-x-default" />

      <meta property="og:locale" content={siteConfig.locale} key="og:locale" />
      <meta property="og:type" content={seo.ogType} key="og:type" />
      <meta property="og:site_name" content={siteConfig.siteName} key="og:site_name" />
      <meta property="og:title" content={seo.metaTitle} key="og:title" />
      <meta property="og:description" content={seo.description} key="og:description" />
      <meta property="og:url" content={pageUrl} key="og:url" />
      <meta property="og:image" content={seo.image} key="og:image" />
      <meta property="og:image:secure_url" content={seo.image} key="og:image:secure_url" />
      <meta property="og:image:alt" content={seo.title} key="og:image:alt" />

      <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
      <meta name="twitter:site" content={siteConfig.twitterHandle} key="twitter:site" />
      <meta name="twitter:creator" content={siteConfig.twitterHandle} key="twitter:creator" />
      <meta name="twitter:title" content={seo.metaTitle} key="twitter:title" />
      <meta name="twitter:description" content={seo.description} key="twitter:description" />
      <meta name="twitter:image" content={seo.image} key="twitter:image" />
      <meta name="twitter:image:alt" content={seo.title} key="twitter:image:alt" />

      {verificationTags.map((tag) => (
        <meta key={tag.name} name={tag.name} content={tag.content} />
      ))}

      {structuredData.map((schema, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}
