import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Mustang',
    year: 1969,
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'F-150',
    year: 2018,
  },
  {
    id: uuid(),
    brand: 'Chevrolet',
    model: 'Camaro',
    year: 1969,
  },
  {
    id: uuid(),
    brand: 'Chevrolet',
    model: 'Silverado',
    year: 2018,
  },
];
