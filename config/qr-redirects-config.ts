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
  ],
};

export default qrRedirectsConfig;
