import { TeamConfig } from '@/config/types/team-config';
import JonathanOrd from '@/assets/team/organisers/jonathan-ord.png';
import SeanScholand from '@/assets/team/organisers/sean-scholand.jpg';
import DanaiMuyambo from '@/assets/team/organisers/danai-muyambo.jpg';

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
    }
  ],
};

export default organisersConfig;
