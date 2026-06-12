import { TeamConfig } from '@/config/types/team-config';
import DanaiMuyambo from '@/assets/team/coreteam/danai-muyambo.jpg';
import StanSimmons from '@/assets/team/coreteam/stan-simmons.jpg';
import AbiLowrie from '@assets/team/coreteam/abi-lowrie.jpg'
import CalebTan from '@assets/team/coreteam/caleb-tan.jpg'
import KieranCollins from '@assets/team/coreteam/kieran-collins.webp'
import NazneenNaveedSait from '@assets/team/coreteam/nazneen.webp'
import LuluSmith from '@assets/team/coreteam/lulu-smith.jpg'
import AlexeiPlumridgeMilsom from '@assets/team/coreteam/alexei-plumridge-milsom.webp'
import RayanaAnjum from '@assets/team/coreteam/rayana-anjum.jpg'
import VenusNg from '@assets/team/coreteam/venus-ng.jpg'
import SiddharthGuruMurthy from '@assets/team/coreteam/sid-guru-murthy.jpg'
import DallonCostello from '@assets/team/coreteam/dallon-costello.png'
import AlasdairKing from '@assets/team/coreteam/alasdair-king.png'
import MichalMatusz from '@assets/team/coreteam/michal-matusz.png'
import RebeccaSmith from '@assets/team/coreteam/rebecca-smith.png'
import OliverSmith from '@assets/team/coreteam/oliver-smith.png'
import ReubenJames from '@assets/team/coreteam/Reuben_james.jpeg'
import MattAdcock from '@assets/team/coreteam/matt-adcock.jpg'
import RebeccaFulford from '@assets/team/coreteam/rebecca_fulford.jpg'

const corerolesConfig: TeamConfig = {
  team: [
    { name: 'Danai Muyambo',
      roles: ['Theatres VTM'],
      course: 'Data Science',
      year: '2nd Year',
      image: DanaiMuyambo
    },

    { name: 'Stan Simmons',
      roles: ['FAB Terrace VTM'],
      course: 'Mathematics',
      year: '3rd Year',
      image: StanSimmons
    },

    { name: 'Abi Lowrie',
      roles: ['Head of Catering'],
      course: 'Cyber Security',
      year: '3rd Year',
      image: AbiLowrie
    },

    { name: 'Rebecca Fulford',
      roles: ['Head of Catering'],
      course: 'GSD',
      year: '3rd Year',
      image: RebeccaFulford
    },

    { name: 'Nazneen Naveed Sait',
      roles: ['Workshops VM'],
      course: ' Msc Healthcare Operational Management',
      year: ' Postgradudate',
      image: NazneenNaveedSait
    },

    { name: 'Alexei Plumridge Milsom',
      roles: ['Gallery VM, Head of Photography'],
      course: 'English Literature & Theatre',
      year: '2nd Year',
      image: AlexeiPlumridgeMilsom
    },

    { name: 'Michal Matusz',
      roles: ['Artist Liason'],
      course: 'Theatre & Performance',
      year: '3rd Year',
      image: MichalMatusz
    },

    { name: 'Kieran Collins',
      roles: ['Gallery VM'],
      course: 'Mathematics',
      year: '3rd Year',
      image: KieranCollins
    },

    { name: 'Caleb Tan',
      roles: ['Theatre VM'],
      course: 'History & Politics',
      year: '2nd Year',
      image: CalebTan 
    },

    { name: 'Rebecca Smith',
      roles: ['Theatres VM'],
      course: 'Theatre & Performance',
      year: '3rd Year',
      image: RebeccaSmith
    },

    { name: 'Venus Ng',
      roles: ['Theatres VTM'],
      course: 'Mathematics',
      year: '1st Year',
      image: VenusNg
    },

    { name: 'Rayana Anjum',
      roles: ['Theatres VTM'],
      course: 'Computer Science',
      year: '1st Year',
      image: RayanaAnjum
    },

    { name: 'Alasdair King',
      roles: ['Wolf Stage VM'],
      course: 'History',
      year: '3rd Year',
      image: AlasdairKing
    },

    { name: 'Oliver Smith',
      roles: ['Head of Streaming'],
      course: 'Computer Science',
      year: '4th Year',
      image: OliverSmith
    },

    { name: 'Sod Guru Murthy',
      roles: ['Main Stage VTM'],
      course: 'Mathematics',
      year: '2nd Year',
      image: SiddharthGuruMurthy
    },

    { name: 'Lulu Smith',
      roles: ['Wolf Stage VM'],
      course: 'History',
      year: '2nd Year',
      image: LuluSmith
    },

    { name: 'Dallon Costello',
      roles: ['Cinema VM'],
      course: 'Spanish, Italian, & Linguistics',
      year: '4th Year',
      image: DallonCostello
    },

    { name: 'Reuben James',
      roles: ['Head of Photography'],
      course: 'Computer Science',
      year: '2nd Year',
      image: ReubenJames
    },

    { name: 'Matt Adcock',
      roles: ['Duty First Aider', 'Truss'],
      course: 'Computer Science & AI (Nottingham)',
      year: '2nd Year',
      image: MattAdcock
    },

    { name: 'Alex Morrison',
      roles: ['Main Stage VM'], //assistant
      course: 'History & Politics',
      year: '3rd Year',
      //image: AlexMorrison
    },

  ],
};

export default corerolesConfig;
