import Hero from './components/hero';
import WhoInvolved from './components/who-involved';
import React from 'react';
import About from './components/about';
import Faq from '@/app/(home)/components/faq/faq';
import History from './components/history';
import EventPreview from './components/event-preview';
import YouTube from '@/app/(home)/components/youtube';
import mainConfig from '@config/main-config';
import homepageConfig from '@config/homepage-config';
import eventsConfig from '@config/events-config';
import HighlightCountdown from '@/app/(home)/components/highlight-countdown';
import CallToAction from '@/app/(home)/components/call-to-action';

// export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="mx-4 flex flex-col items-center mt-[-6rem] relative z-20" >
        {homepageConfig.about.countdown.enabled && <HighlightCountdown />}
        {homepageConfig.about.callToAction.enabled && <CallToAction />}
      </section>

      <About />

      {homepageConfig.eventPreview.enabled && eventsConfig.enabled && (
        <EventPreview />
      )}
      {homepageConfig.youtube.enabled && <YouTube />}
      <WhoInvolved />
      <History />
      <Faq defaultTab="General" />
    </main>
  );
}
