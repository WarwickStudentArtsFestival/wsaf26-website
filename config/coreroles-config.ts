import { TeamConfig } from '@/config/types/team-config';
import DanaiMuyambo from '@/assets/team/coreteam/danai-muyambo.jpg';
import StanSimmons from '@/assets/team/coreteam/stan-simmons.jpg';
import AbiLowrie from '@assets/team/coreteam/abi-lowrie.jpg'
import CalebTan from '@assets/team/coreteam/caleb-tan.jpg'
import KieranCollins from '@assets/team/coreteam/kieran-collins.webp'
import NazneenNaveedSait from '@assets/team/coreteam/nazneen.webp'
import LuluSmith from '@assets/team/coreteam/lulu-smith.jpg'
import AlexeiPlumridgeMilsom from '@assets/team/coreteam/alexei-plumridge-milsom.webp'
import RayanaArjum from '@assets/team/coreteam/rayana-anjum.jpg'
import VenusNg from '@assets/team/coreteam/venus-ng.jpg'
import SiddharthGuruMurthy from '@assets/team/coreteam/sid-guru-murthy.jpg'

const corerolesConfig: TeamConfig = {
  team: [
    { name: 'Danai Muyambo',
      roles: ['Theatre VTM'],
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
      //image: MichalMatusz
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
      roles: ['Theatre VM'],
      course: 'Theatre & Performance',
      year: '3rd Year',
      //image: RebeccaSmith
    },

    { name: 'Venus Ng',
      roles: ['Theatre VTM'],
      course: 'Mathematics',
      year: '1st Year',
      image: VenusNg
    },

    { name: 'Rayana Arjum',
      roles: ['Theatre VTM'],
      course: 'Computer Science',
      year: '1st Year',
      image: RayanaArjum
    },

    { name: 'Alasdair King',
      roles: ['Main Stage VM'],
      course: 'History',
      year: '3rd Year',
      //image: AlasdairKing
    },

    { name: 'Oliver Smith',
      roles: ['Head of Streaming'],
      course: 'Computer Science',
      year: '4th Year',
      //image: OliverSmith
    },

    { name: 'Sod Guru Murthy',
      roles: ['Main Stage VTM'],
      course: 'Mathematics',
      year: '2nd Year',
      image: SiddharthGuruMurthy
    },

    { name: 'Lulu Smith',
      roles: ['Ramphal Cluster Manager'],
      course: 'History',
      year: '2nd Year',
      image: LuluSmith
    },

    { name: 'Dallon Costello',
      roles: ['Cinema VM'],
      course: 'Spanish, Italian, & Linguistics',
      year: '4th Year',
      //image: DallonCostello
    },

  ],
};

export default corerolesConfig;
