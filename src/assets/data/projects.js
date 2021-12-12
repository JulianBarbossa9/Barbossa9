import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Bogotá Site Recommend',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit, convallis ultrices vehicula',
    img: UTrackerImg,
  
    
  },
  {
    id: uuidv4(),
    name: 'Parking + ',
    desc:
    'Lorem ipsum dolor sit amet consectetur adipiscing elit, convallis ultrices vehicula.',
    img: GreenCtgImg,
  

    
  },
  {
    id: uuidv4(),
    name: 'Quote Parking',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit, convallis ultrices vehicula',
    img: CoinTrackerImg,
    
  },
  {
    id: uuidv4(),
    name: "Galaxy",
    desc:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit, convallis ultrices vehicula.',
    img: CavinImg,
   
  },
  {
    id: uuidv4(),
    name: 'Three JS',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit, convallis ultrices vehicula.',
    img: ProjectImg,
   
  },
];

export default projects;
