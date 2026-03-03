import { HomepageConfig } from '@config/types/homepage-config';

const homepageConfig: HomepageConfig = {
  hero: {
    youtubeVideoId: '5_doeGYlb-U',
  },

  about: {
    countdown: {
      enabled: false,
      title: 'Countdown',
      subtitle: 'WSAF Begins Friday Week 7 (12th June)',
      countdownDateIso: '2026-06-12T09:00Z', // 10am BST on Friday 12th June
      url: '/events',
    },

    callToAction: {
      enabled: true,
      type: 'discord',
    },
  },

  eventPreview: {
    enabled: false,
  },

  youtube: {
    enabled: false,
    heading: 'Livestream',
    // title: 'Watch or Recap Online',
    title: 'Watch Online',
    description:
      //  'Many of our events are being livestreamed to YouTube. Click here to watch live or on-demand!',
      'Most of events were livestreamed or uploaded to YouTube. Click here to watch them back!',
  },

  crew: {
    // buttonText: 'Join the WSAF 2025 Crew',
    buttonText: 'WSAF 2025 Crew',
  },

  keyDates: [
    {
      name: 'Submissions Open',
      date: 'Mon 10th March',
      dateTime: '2026-03-10',
      description: 'WSAF performance submissions open.',
      warwickWeek: 'Term 2 Week 10',
    },
    {
      name: 'Submissions Close',
      date: 'Friday 2nd May',
      dateTime: '2026-05-02',
      description:
        'Submission form closes and the schedule and logistics are finalised.',
      warwickWeek: 'Term 3, Week 2',
    },
    {
      name: 'WSAF',
      date: 'Fri 12th - Mon 15th June',
      dateTime: '2026-06-12',
      description:
        'The festival itself - a 4 day showcase and celebration of all aspects of the arts.',
      warwickWeek: 'Term 3, Week 8/9',
    },
  ],
};

export default homepageConfig;
