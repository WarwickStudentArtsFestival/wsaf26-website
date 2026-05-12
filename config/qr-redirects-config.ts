import { QrRedirectsConfig } from '@config/types/qr-redirects-config';

const qrRedirectsConfig: QrRedirectsConfig = {
  redirects: [
    {
      shortlink: '/instagram',
      destination: 'https://www.instagram.com/wsaf26/',
    },
    {
      shortlink: '/discord',
      destination: 'https://discord.gg/TuFwJX4GKM',
    },
    {
      shortlink: '/qr/in1',
      destination: 'https://www.instagram.com/wsaf26/',
      campaign: 'boar',
      medium: 'print',
      source: 'boar_article',
    },
    {
      shortlink: '/qr/sp1',
      destination: 'https://wsaf.org.uk/submit/',
      campaign: 'submissions',
      medium: 'print',
      source: 'submissions_poster_1',
    },

    {
      shortlink: '/qr/bs1',
      destination: 'https://wsaf.org.uk/submit/',
      campaign: 'submissions',
      medium: 'digital',
      source: 'big_screen_1',
    },

    {
      shortlink: '/qr/bs2',
      destination: 'https://wsaf.org.uk/submit/',
      campaign: 'submissions',
      medium: 'digital',
      source: 'big_screen_2',
    },

    {
      shortlink: '/qr/su1',
      destination: 'https://wsaf.org.uk/submit/',
      campaign: 'submissions',
      medium: 'digital',
      source: 'su_screen_1',
    },
  ],
};

export default qrRedirectsConfig;
