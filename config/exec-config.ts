import { TeamConfig } from '@config/types/team-config';

import AdamSocieties from '@/assets/team/adam-societies.jpg';
import OllyMurphy from '@/assets/team/olly-murphy.jpg';
import DaePomeroy from '@/assets/team/dae-pomeroy.jpg';
import TrinBalkwill from '@/assets/team/trin-balkwill.jpg';
import MaximusKaiusLeighton from '@/assets/team/maximus-kaius-leighton.jpg';
import EchoVaughan from '@/assets/team/echo-vaughan.jpg';
import WillowBrown from '@/assets/team/willow-brown.jpg';
import AshKayembe from '@/assets/team/ash-kayembe.jpg';
import LillianDove from '@/assets/team/lillian-dove.jpg';
import EllieWilliams from '@/assets/team/ellie-williams.jpg';
import TaraFahey from '@/assets/team/tara-fahey.png';

const execConfig: TeamConfig = {
  team: [
    {
      name: 'Trin Balkwill',
      roles: ['Head of Submissions'],
      course: 'Cyber Security',
      year: '3rd Year',
      image: TrinBalkwill,
    },
    {
      name: 'Olly Murphy',
      roles: ['Technicator'],
      course: 'Computer Systems Engineering',
      year: '2nd Year',
      image: OllyMurphy,
    },
    {
      name: 'Adam Skrzymowski',
      roles: ['Co-President'],
      course: 'Societies VP',
      year: '1st Year',
      image: AdamSocieties,
    },
    {
      name: 'Maximus Kaius Leighton',
      roles: ['Treasurer'],
      course: 'Mathematics',
      year: '3rd Year',
      image: MaximusKaiusLeighton,
    },
    {
      name: 'Echo Vaughan',
      roles: ['Head of Digital'],
      year: '3rd Year',
      course: 'Cyber Security',
      image: EchoVaughan,
    },
    {
      name: 'Dae Pomeroy',
      roles: ['Co-President'],
      course: 'Liberal Arts',
      year: '4th Year',
      image: DaePomeroy,
    },

    {
      name: 'Lillian Dove',
      roles: ['Socials Coordinator'],
      course: 'PAIS',
      year: '2nd Year',
      image: LillianDove,
    },

    {
      name: 'Tara Fahey',
      roles: ['Secretary'],
      course: 'Mathematics and Computer Science',
      year: '2nd Year',
      image: TaraFahey,
    },

    {
      name: 'Ash Kayembe',
      roles: ['Secretary'],
      course: 'Integrated Natural Sciences',
      year: '1st Year',
      image: AshKayembe,
    },

    {
      name: 'Willow Brown',
      roles: ['Welfare and Equal Opportunities Officer'],
      course: 'Cyber Security',
      year: '1st Year',
      image: WillowBrown,
    },
    
    {
      name: 'Ellie Williams',
      roles: ['Volunteer Coordinator'],
      course: 'Maths and Physics',
      year: '4th Year',
      image: EllieWilliams,
    }
  ],
};

export default execConfig;
