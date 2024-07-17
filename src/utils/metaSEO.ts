import { Metadata } from 'next';
interface MetaSeo {
  titleSEO: string;
  descriptionSEO: string;
  keywordsSEO: string[];
  ogImg: string;
}

export const getMetadata = ({
  titleSEO,
  descriptionSEO,
  keywordsSEO,
  ogImg,
}: MetaSeo): Metadata => {
  return {
    title: titleSEO,
    description: descriptionSEO,
    keywords: keywordsSEO,
    authors: [{ name: 'ErickDevUp'}],
    creator: 'ErickDevUp',
    twitter: {
      title: titleSEO,
      description: descriptionSEO,
      creator: '@erickdevup',
      images: [ogImg],
    },
    openGraph: {
      siteName: 'Nox Agency',
      title: titleSEO,
      description: descriptionSEO,
      type: 'website',
      images: [ogImg],
    },
    verification: {
      google: 'google',
      yandex: 'yandex',
      yahoo: 'yahoo',
      other: {
        me: ['erickdevup@gmail.com'],
      },
    },

    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': 1,
        'max-image-preview': 'large',
        'max-snippet': 300,
      },
    },
  };
};
