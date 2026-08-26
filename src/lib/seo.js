const DEFAULT_SITE_URL = 'https://leruofoundation.org';

const normalizeUrl = (url) => url.replace(/\/+$/, '');

export const siteConfig = {
  siteName: 'Leruo Foundation',
  organizationName: 'Leruo Foundation NPC',
  defaultDescription:
    'Leruo Foundation empowers youthpreneurs, women leaders, and small business owners through mentorship, entrepreneurship programmes, leadership development, and strategic partnerships in South Africa.',
  defaultImage: '/images/about-hero.jpg',
  siteUrl: normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL),
  language: 'en-ZA',
  locale: 'en_ZA',
  email: 'connect@leruofoundation.org',
  phone: '+27 77 605 2454',
  address: {
    streetAddress: '1103 Tugela Street, Klipfontein View Ext 1',
    addressLocality: 'Midrand',
    postalCode: '1685',
    addressRegion: 'Gauteng',
    addressCountry: 'ZA',
  },
  geo: {
    region: 'ZA-GP',
    placename: 'Midrand',
    latitude: '-26.052154',
    longitude: '28.159864',
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61574829148161',
    linkedin: 'https://www.linkedin.com/company/leruo-foundation',
    x: 'https://x.com/LeruoFoundation',
    youtube: 'https://www.youtube.com/@LeruoFoundationNPO',
  },
  twitterHandle: '@LeruoFoundation',
  defaultKeywords: [
    'Leruo Foundation',
    'South Africa entrepreneurship foundation',
    'youth entrepreneurship South Africa',
    'women leadership network South Africa',
    'business mentorship South Africa',
    'entrepreneurship programmes',
    'economic empowerment',
    'Youthpreneurs',
    'Branding Chief Executive Circle SA',
  ],
};

export const pageSeo = {
  '/': {
    title: 'Empowering Entrepreneurs and Future Leaders in South Africa',
    description:
      'Discover Leruo Foundation programmes supporting youthpreneurs, women leaders, and small businesses through mentorship, leadership, sponsorship, and entrepreneurship development.',
    image: '/images/about-hero.jpg',
    keywords: ['entrepreneurship foundation', 'youthpreneurs', 'women CEOs network', 'business empowerment'],
    label: 'Home',
    pageType: 'WebPage',
    ogType: 'website',
    priority: '1.0',
    changeFrequency: 'weekly',
  },
  '/about': {
    title: 'About Leruo Foundation',
    description:
      'Learn about Leruo Foundation, our mission, our team, and our commitment to building sustainable entrepreneurship and economic empowerment in South Africa.',
    image: '/images/about/aboutus1.jpg',
    keywords: ['about Leruo Foundation', 'nonprofit entrepreneurship South Africa', 'economic empowerment foundation'],
    label: 'About',
    pageType: 'AboutPage',
    priority: '0.9',
    changeFrequency: 'monthly',
  },
  '/bankingdetails': {
    title: 'Donation and Banking Details',
    description:
      'Support Leruo Foundation with secure donation options, banking details, and instant online giving for entrepreneurship and empowerment initiatives.',
    image: '/images/about-hero.jpg',
    keywords: ['donate to Leruo Foundation', 'Leruo Foundation banking details', 'support youth entrepreneurs'],
    label: 'Banking Details',
    pageType: 'WebPage',
    priority: '0.8',
    changeFrequency: 'monthly',
  },
  '/becomesponsor': {
    title: 'Become a Sponsor',
    description:
      'Partner with Leruo Foundation to support youth entrepreneurship, leadership development, mentorship, and community-driven economic growth.',
    image: '/images/cta/banner.jpg',
    keywords: ['Leruo Foundation sponsorship', 'sponsor youth entrepreneurship', 'CSR partnerships South Africa'],
    label: 'Become a Sponsor',
    pageType: 'WebPage',
    priority: '0.8',
    changeFrequency: 'monthly',
  },
  '/brandingcircle': {
    title: 'Branding Chief Executive Circle SA',
    description:
      'Explore Branding Chief Executive Circle SA, a Leruo Foundation initiative for entrepreneurs seeking branding strategy, executive networking, and expert-led brand development.',
    image: '/bc-launch.jpg',
    keywords: ['branding chief executive circle', 'branding mentorship South Africa', 'executive networking'],
    label: 'Branding Chief Executive Circle SA',
    pageType: 'WebPage',
    priority: '0.8',
    changeFrequency: 'monthly',
  },
  '/contact': {
    title: 'Contact Leruo Foundation',
    description:
      'Contact Leruo Foundation for partnerships, sponsorships, donations, programme enquiries, and collaboration opportunities.',
    image: '/images/about-hero.jpg',
    keywords: ['contact Leruo Foundation', 'foundation partnerships', 'South Africa nonprofit contact'],
    label: 'Contact',
    pageType: 'ContactPage',
    priority: '0.8',
    changeFrequency: 'monthly',
  },
  '/eventgallery': {
    title: 'Event Gallery',
    description:
      'Browse Leruo Foundation event highlights, programme moments, and community impact galleries from Youthpreneurs and related initiatives.',
    image: '/images/youthpreneurs/yp5.jpg',
    keywords: ['Leruo Foundation gallery', 'Youthpreneurs photos', 'event gallery South Africa'],
    label: 'Event Gallery',
    pageType: 'CollectionPage',
    priority: '0.7',
    changeFrequency: 'monthly',
  },
  '/gallerydrive': {
    title: 'Full Youthpreneurs Gallery',
    description:
      'Explore the full Youthpreneurs gallery and view more moments captured during Leruo Foundation entrepreneurship events.',
    image: '/images/youthpreneurs/gallery/yg1.jpg',
    keywords: ['Youthpreneurs gallery', 'entrepreneurship event photos', 'Leruo Foundation images'],
    label: 'Full Youthpreneurs Gallery',
    pageType: 'CollectionPage',
    priority: '0.6',
    changeFrequency: 'monthly',
  },
  '/sponsorshippackages': {
    title: 'Sponsorship Packages',
    description:
      'Review Leruo Foundation sponsorship package options and partner benefits for supporting the Youthpreneurs programme and entrepreneurial development.',
    image: '/images/youthpreneurs/RFP-1-02.jpg',
    keywords: ['sponsorship packages', 'Youthpreneurs sponsors', 'foundation partner benefits'],
    label: 'Sponsorship Packages',
    pageType: 'WebPage',
    priority: '0.8',
    changeFrequency: 'monthly',
  },
  '/womenceo': {
    title: 'Women CEOs Network',
    description:
      'Join Leruo Foundation\'s Women CEOs Network and connect with visionary women leaders, founders, and business owners focused on meaningful growth.',
    image: '/images/womenceos/women-network.jpg',
    keywords: ['women CEOs network', 'women leadership South Africa', 'business women network'],
    label: 'Women CEOs Network',
    pageType: 'WebPage',
    priority: '0.8',
    changeFrequency: 'monthly',
  },
  '/youthpreneurs': {
    title: 'Youthpreneurs Programme',
    description:
      'Learn about Leruo Foundation\'s Youthpreneurs programme, annual summit, incubation initiatives, mentorship, and sponsorship opportunities for young entrepreneurs.',
    image: '/images/youthpreneurs.jpg',
    keywords: ['Youthpreneurs programme', 'young entrepreneurs South Africa', 'entrepreneurship mentorship'],
    label: 'Youthpreneurs',
    pageType: 'WebPage',
    priority: '0.9',
    changeFrequency: 'monthly',
  },
  '/graduation-2026': {
    title: 'Changemakers Incubation Programme Graduation Ceremony 2026',
    description:
      'View the official digital programme and menu for the Leruo Foundation Changemakers Incubation Programme Graduation Ceremony on Saturday, 29 August 2026 at Hoyo Hoyo Chartwell.',
    image: '/images/youthpreneurs.jpg',
    keywords: [
      'Leruo Foundation graduation 2026',
      'Changemakers Incubation Programme',
      'Youthpreneurs graduation',
      'Hoyo Hoyo Chartwell',
      'Leruo Foundation digital programme',
    ],
    label: 'Changemakers Graduation 2026',
    pageType: 'WebPage',
    priority: '1.0',
    changeFrequency: 'weekly',
    event: {
      name: 'Leruo Foundation Changemakers Incubation Programme Graduation Ceremony',
      startDate: '2026-08-29T11:00:00+02:00',
      locationName: 'Hoyo Hoyo Chartwell',
    },
  },
  '/youthpreneurs-gallery': {
    title: 'Youthpreneurs Gallery',
    description:
      'View photo highlights from the Leruo Foundation Youthpreneurs event and see moments from our entrepreneurship community in action.',
    image: '/images/youthpreneurs/gallery/yg1.jpg',
    keywords: ['Youthpreneurs gallery', 'entrepreneurship photos', 'Leruo Foundation event highlights'],
    label: 'Youthpreneurs Gallery',
    pageType: 'CollectionPage',
    priority: '0.7',
    changeFrequency: 'monthly',
  },
  '/youthpreneurs2025': {
    title: 'Youthpreneurs 2025',
    description: 'Youthpreneurs 2025 updates from Leruo Foundation.',
    image: '/images/youthpreneurs.jpg',
    keywords: ['Youthpreneurs 2025', 'Leruo Foundation updates'],
    label: 'Youthpreneurs 2025',
    pageType: 'WebPage',
    noindex: true,
    priority: '0.3',
    changeFrequency: 'yearly',
  },
};

export const absoluteUrl = (path = '/') => {
  if (!path || path === '/') {
    return siteConfig.siteUrl;
  }

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return `${siteConfig.siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

export const buildMetaTitle = (title) => (title === siteConfig.siteName ? title : `${title} | ${siteConfig.siteName}`);

export const getPageSeo = (pathname = '/') => {
  const page = pageSeo[pathname] || {};
  const isKnownPage = Boolean(pageSeo[pathname]);
  const title = page.title || siteConfig.siteName;
  const description = page.description || siteConfig.defaultDescription;
  const keywords = [...siteConfig.defaultKeywords, ...(page.keywords || [])];

  return {
    path: pathname,
    title,
    metaTitle: buildMetaTitle(title),
    description,
    image: absoluteUrl(page.image || siteConfig.defaultImage),
    keywords: Array.from(new Set(keywords)),
    label: page.label || title,
    pageType: page.pageType || 'WebPage',
    ogType: page.ogType || 'website',
    noindex: page.noindex || !isKnownPage,
    priority: page.priority || '0.6',
    changeFrequency: page.changeFrequency || 'monthly',
    event: page.event || null,
  };
};

const buildBreadcrumbs = (pathname, label) => {
  if (!pathname || pathname === '/') {
    return [{ name: 'Home', path: '/' }];
  }

  return [
    { name: 'Home', path: '/' },
    { name: label, path: pathname },
  ];
};

const organizationId = `${siteConfig.siteUrl}#organization`;
const websiteId = `${siteConfig.siteUrl}#website`;

export const buildStructuredData = (pathname = '/') => {
  const seo = getPageSeo(pathname);
  const pageUrl = absoluteUrl(pathname);
  const breadcrumbs = buildBreadcrumbs(pathname, seo.label);

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    '@id': organizationId,
    name: siteConfig.organizationName,
    alternateName: siteConfig.siteName,
    url: siteConfig.siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/images/leruofoundationicon.png'),
    },
    image: absoluteUrl(siteConfig.defaultImage),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: Object.values(siteConfig.social),
    areaServed: {
      '@type': 'Country',
      name: 'South Africa',
    },
    address: {
      '@type': 'PostalAddress',
      ...siteConfig.address,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: siteConfig.email,
        telephone: siteConfig.phone,
        areaServed: 'ZA',
        availableLanguage: ['en'],
      },
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    url: siteConfig.siteUrl,
    name: siteConfig.siteName,
    inLanguage: siteConfig.language,
    publisher: {
      '@id': organizationId,
    },
  };

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': seo.pageType,
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: seo.title,
    description: seo.description,
    inLanguage: siteConfig.language,
    isPartOf: {
      '@id': websiteId,
    },
    about: {
      '@id': organizationId,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: seo.image,
    },
  };

  const breadcrumbSchema =
    breadcrumbs.length > 1
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: absoluteUrl(item.path),
          })),
        }
      : null;

  const eventSchema = seo.event
    ? {
        '@context': 'https://schema.org',
        '@type': 'Event',
        '@id': `${pageUrl}#event`,
        name: seo.event.name || seo.title,
        description: seo.description,
        startDate: seo.event.startDate,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        url: pageUrl,
        image: [seo.image],
        location: {
          '@type': 'Place',
          name: seo.event.locationName,
        },
        organizer: {
          '@id': organizationId,
        },
      }
    : null;

  return [
    organizationSchema,
    pathname === '/' ? websiteSchema : null,
    pageSchema,
    breadcrumbSchema,
    eventSchema,
  ].filter(Boolean);
};

export const getSitemapEntries = () =>
  Object.keys(pageSeo)
    .map((pathname) => ({
      pathname,
      ...getPageSeo(pathname),
    }))
    .filter((page) => !page.noindex);
