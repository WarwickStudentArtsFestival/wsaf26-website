import { VenuesConfig } from '@config/types/venues-config';
import MainStage from '@/assets/venues/main-stage.png';
import FabGallery from '@/assets/venues/fab-gallery.jpg';
import Fab1 from '@/assets/venues/fab1.jpg';
import Fab2 from '@/assets/venues/fab2.jpg';
import Rehearsal from '@/assets/venues/rehersal.jpg';
import Terrace from '@/assets/venues/terrace.jpg';
import Placeholder from '@/assets/hero.jpg';

const venuesConfig: VenuesConfig = {
  venues: {

    // Benefactors Place Stage
    'cc515006-4f15-5ca7-bb36-674861bb994d': {
      mapUrl:
        'https://link.mazemap.com/0v9StSoK',
      image: MainStage,
      imageAlt: 'Picture of the WSAF 2024 Main Stage',
      roomLocation: 'Benefactors Place',
      slug: 'main-stage',
      filterBitFieldIndex: 1,
    },

    // Ramphal Theatre 1
    'ed095557-7db6-563e-a46f-d34f5bbcf210': {
      mapUrl:
        'https://link.mazemap.com/lpZaNVNE',
      image: Fab1,
      imageAlt: 'Image of a performance in a theatre',
      roomLocation: 'R0.03 / R0.04',
      slug: 'other-fab-theatre',
      filterBitFieldIndex: 2,
    },

    // Ramphal Theatre 2
    'e57abf95-0722-5aa6-bf2a-2f7368f224ae': {
      mapUrl:
        'https://link.mazemap.com/gw4iZchJ',
      image: Fab2,
      imageAlt: 'Image of a performance in a theatre',
      roomLocation: 'R0.12',
      slug: 'fab-theatre',
      filterBitFieldIndex: 3,
    },

    // FAB Terrace
    '1d81f005-c7b5-51da-90f3-3ac8b049365d': {
      mapUrl:
        'https://link.mazemap.com/jTojk9c7',
      image: Terrace,
      imageAlt: 'Drone Shot of FAB terrace',
      roomLocation: 'FAB Terrace',
      slug: 'fab-terrace',
      filterBitFieldIndex: 5,
    },

    // Ramphal Cinema
    'FAB0.21': {
      mapUrl:
        'https://link.mazemap.com/gw4iZchJ',
      image: Rehearsal,
      imageAlt: 'Image of Cinema',
      roomLocation: 'R0.12',
      slug: 'ramphal-cinema',
      filterBitFieldIndex: 6,
    },

    // Ramphal Art Gallery
    'b2e763d2-2afc-5760-b8d3-9f3557f01550': {
      mapUrl:
        'https://link.mazemap.com/OkjnPuz3',
      image: FabGallery,
      imageAlt: 'Picture of Art Gallery',
      roomLocation: 'R0.14',
      slug: 'ramphal-art-gallery',
      filterBitFieldIndex: 7,
    },

    // The Graduate
    '448a9275-ad9b-591f-9f11-fd49fa5f04b2': {
      mapUrl:
        'https://link.mazemap.com/Tsm8jTKB',
      image: Placeholder,
      imageAlt:
        'Picture of a performance in a room that looks like Avon Drama Studio',
      roomLocation: 'The Graduate',
      slug: 'the-graduate',
      filterBitFieldIndex: 9,
    },

  },
};

export default venuesConfig;
