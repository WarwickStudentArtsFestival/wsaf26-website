import { QrRedirectsConfig } from '@config/types/qr-redirects-config';

const qrRedirectsConfig: QrRedirectsConfig = {
  redirects: [
    {
      shortlink: '/qr/in1',
      destination: 'https://wsaf.org.uk/instagram',
      campaign: 'boar',
      medium: 'print',
      source: 'boar_article',
    },
  ],
};

export default qrRedirectsConfig;
