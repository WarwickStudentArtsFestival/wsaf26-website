import { TeamConfig } from '@/config/types/team-config';
import JonathanOrd from '@/assets/team/organisers/jonathan-ord.png';
import SeanScholand from '@/assets/team/organisers/sean-scholand.jpg';
import DanaiMuyambo from '@/assets/team/organisers/danai-muyambo.jpg';
import NaomiPandey from '@/assets/team/organisers/naomi-pandey.jpg';
import EllieStocker from '@/assets/team/organisers/ellie-stocker.jpg';
import StanSimmons from '@/assets/team/organisers/stan-simmons.jpg';
import CatHibbs from '@/assets/team/organisers/cat-hibbs.png';

const organisersConfig: TeamConfig = {
  team: [
    {
      name: 'Jonathan Ord',
      roles: ['Stream, Tech'],
      course: 'Computer Science',
      year: '3rd Year',
      image: JonathanOrd,
    },

    { name: 'Sean Scholand', 
      roles: ['Video'], 
      course: 'Physics', 
      year: '2nd Year', 
      image: SeanScholand },

    { name: 'Danai Muyambo',
      roles: ['Tech'],
      course: 'Data Science',
      year: '2nd Year',
      image: DanaiMuyambo
    },

    { name: 'Naomi Pandey',
      roles: ['Marketing'],
      course: 'English Literature and Creative Writing',
      year: '3rd Year',
      image: NaomiPandey
    },

    { name: 'Ellie Stocker',
      roles: ['Marketing Consultant'],
      course: 'English and Theatre Studies',
      year: 'Alumni',
      image: EllieStocker
    },

    { name: 'Stan Simmons',
      roles: ['Tech'],
      course: 'Mathematics',
      year: '3rd Year',
      image: StanSimmons
    },
    { name: 'Cat Hibbs',
      roles: ['Dance Showcase'],
      course: 'Civil Engineering',
      year: '4th Year',
      image: CatHibbs
    },

  ],
};

export default organisersConfig;
