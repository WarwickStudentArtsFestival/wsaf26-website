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

    {
      shortlink: '/qr/poop',
      destination: 'https://wsaf.org.uk/submit/',
      campaign: 'submissions',
      medium: 'digital',
      source: 'poop',
    },
    {
      shortlink: '/qr/fih',
      destination: 'https://wsaf.org.uk/submit/',
      campaign: 'submissions',
      medium: 'digital',
      source: 'fih',
    },
    {
      shortlink: '/qr/frog',
      destination: 'https://wsaf.org.uk/submit/',
      campaign: 'submissions',
      medium: 'digital',
      source: 'frog',
    },
    {
      shortlink: '/qr/you',
      destination: 'https://wsaf.org.uk/submit/',
      campaign: 'submissions',
      medium: 'digital',
      source: 'you',
    },
    {
      shortlink: '/qr/pee',
      destination: 'https://wsaf.org.uk/submit/',
      campaign: 'submissions',
      medium: 'digital',
      source: 'pee',
    },
    {
      shortlink: '/qr/therapy',
      destination: 'https://wsaf.org.uk/submit/',
      campaign: 'submissions',
      medium: 'digital',
      source: 'therapy',
    },
    {
      shortlink: '/qr/badtherapy',
      destination: 'https://wsaf.org.uk/submit/',
      campaign: 'submissions',
      medium: 'digital',
      source: 'badtherapy',
    },
    {
      shortlink: '/qr/cat',
      destination: 'https://wsaf.org.uk/submit/',
      campaign: 'submissions',
      medium: 'digital',
      source: 'cat',
    },
    {
      shortlink: '/qr/john',
      destination: 'https://wsaf.org.uk/submit/',
      campaign: 'submissions',
      medium: 'digital',
      source: 'john',
    },
    {
      shortlink: '/qr/alex',
      destination: 'https://wsaf.org.uk/submit/',
      campaign: 'submissions',
      medium: 'digital',
      source: 'alex',
    },
    {
      shortlink: '/qr/steve',
      destination: 'https://wsaf.org.uk/submit/',
      campaign: 'submissions',
      medium: 'digital',
      source: 'steve',
    },
    {
      shortlink: '/qr/greg',
      destination: 'https://wsaf.org.uk/submit/',
      campaign: 'submissions',
      medium: 'digital',
      source: 'greg',
    },

    // JH 08/06/2026 switched from https://forms.gle/h1DtB1pXmTjrxxFs6
    {
      shortlink: '/qr/vf1',
      destination: 'https://helfertool.wsaf.org.uk/wsaf-2026/',
      campaign: 'volunteers',
      medium: 'digital',
      source: 'flyer',
    },

    /* NEW VOLUNTEER FLYER 08/07/2026 - TO BE REPLACED WITH PUBLIC HELFERTOOL ONCE OPEN*/
    // JH 08/06/2026 switched from https://wsaf.org.uk/crew
    {
      shortlink: '/qr/vf2',
      destination: 'https://helfertool.wsaf.org.uk/wsaf-2026/',
      campaign: 'volunteers',
      medium: 'digital',
      source: 'flyer2',
    },
  ],
};

export default qrRedirectsConfig;
