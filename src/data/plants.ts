import monsteraImg from '@/assets/monstera.jpg';
import snakePlantImg from '@/assets/snake-plant.jpg';
import pothosImg from '@/assets/pothos.jpg';
import fiddleLeafImg from '@/assets/fiddle-leaf.jpg';
import spiderPlantImg from '@/assets/spider-plant.jpg';
import peaceLilyImg from '@/assets/peace-lily.jpg';
import { Plant } from '@/store/cartSlice';

export const plants: Plant[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    price: 45.99,
    image: monsteraImg,
    category: 'Tropical',
  },
  {
    id: '2',
    name: 'Snake Plant',
    price: 32.99,
    image: snakePlantImg,
    category: 'Low Maintenance',
  },
  {
    id: '3',
    name: 'Golden Pothos',
    price: 28.99,
    image: pothosImg,
    category: 'Hanging',
  },
  {
    id: '4',
    name: 'Fiddle Leaf Fig',
    price: 68.99,
    image: fiddleLeafImg,
    category: 'Tropical',
  },
  {
    id: '5',
    name: 'Spider Plant',
    price: 24.99,
    image: spiderPlantImg,
    category: 'Hanging',
  },
  {
    id: '6',
    name: 'Peace Lily',
    price: 38.99,
    image: peaceLilyImg,
    category: 'Low Maintenance',
  },
];

export const categories = ['Tropical', 'Low Maintenance', 'Hanging'];
