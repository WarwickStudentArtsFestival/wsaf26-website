import { MainConfig } from '@config/types/main-config';

const mainConfig: MainConfig = {
  dates: {
    year: '2026',
    week: 'Week 7-8',
    durationDaysText: 'four',

    startDate: 'Fri 12th',
    startDateIso: '2026-06-12T10:00:00.000',
    endDate: 'Mon 15th',
    endDateIso: '2026-06-15T22:00:00.000',
    month: 'June',
  },
  header: {
    rightButtons: {
      discord: true,
      feedback: false,
      crewPage: false,

      crewSignup: false,
      submissionsPortal: false,
    },
  },
  socials: {
    instagram: 'wsaf26',
    discordInvite: 'https://discord.gg/TuFwJX4GKM',
    youtubeHandle: 'wsaf26',
  },
  submissions: {
    open: false,
    closingDate: 'Friday Week 2 (2nd May)',
    submitUrl: 'https://submit.wsaf.org.uk/2026/cfp',
  },
  crew: {
    // signupUrl: 'https://helfertool.wsaf.org.uk/wsaf2025/',
    signupUrl: 'https://discord.gg/TuFwJX4GKM',
  },
  feedback: {
    homepage: false,
    banner: false,
    popup: false,
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSewV74lnEt9Wwm-DqWDHtQgYSJ6WI2jLdvryAmHq1HyVBUfZQ/viewform?usp=sharing&ouid=108184775135612947638',
  },
  githubUrl: 'https://github.com/WarwickStudentArtsFestival/wsaf26-website',
  defaultMetaDescription:
    'Warwick Student Arts Festival (WSAF) is a fully student-run showcase and celebration of the arts at Warwick, taking place in Term 3 (June).\\n\\nSubmissions for events are opening soon!',
};

export default mainConfig;
