import { TeamConfig } from '@/config/types/team-config';
import JonathanOrd from '@/assets/team/organisers/jonathan-ord.png';
import SeanScholand from '@/assets/team/organisers/sean-scholand.jpg';
import NaomiPandey from '@/assets/team/organisers/naomi-pandey.jpg';
import EllieStocker from '@/assets/team/organisers/ellie-stocker.jpg';
import CatHibbs from '@/assets/team/organisers/cat-hibbs.png';
import EthanGraham from '@/assets/team/organisers/ethan-graham.jpg'

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

    { name: 'Cat Hibbs',
      roles: ['Dance Showcase'],
      course: 'Civil Engineering',
      year: '4th Year',
      image: CatHibbs
    },

    { name: 'Ethan Graham',
      roles: ['Bar Supervisor'],
      course: 'Mechanical Engineering',
      year: ' Alumni',
      image: EthanGraham
    },

  ],
};

export default organisersConfig;
