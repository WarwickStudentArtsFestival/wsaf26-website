import { TeamConfig } from '@/config/types/team-config';
import IzzyMarzolini from '@assets/team/volunteers/izzy-marzolini.png';
import EmrysMachnicki from '@assets/team/volunteers/emrys-machnicki.png';
import JoshHeng from '@assets/team/volunteers/josh-heng.png';
//import ClairevanHeel from '@assets/team/volunteers/claire-van-heel.png';

const volunteersConfig: TeamConfig = {
  team: [
    { name: 'Josh Heng',
      roles: ['Digital', 'Bar Staff', 'Tech'],
      course: 'Computer Science',
      year: 'Alumni',
      image: JoshHeng
    },

    { name: 'Emrys Machnicki',
      roles: ['Marketing', 'Photography'],
      course: 'International Management',
      year: '3rd Year',
      image: EmrysMachnicki
    },

    { name: 'Izzy Marzolini',
      roles: ['Bar Staff'],
      course: 'English & Theatre',
      year: '2nd Year',
      image: IzzyMarzolini
    },

    { name: 'Claire van Heel',
      roles: ['Bar Staff', 'Steward'],
      course: 'Mathematics and Statistics',
      year: '3rd Year',
      //image: ClairevanHeel
    },
  ],
};

export default volunteersConfig;
