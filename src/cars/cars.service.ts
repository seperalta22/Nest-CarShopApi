import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

  findAll() {
    return [...this.cars];
  }

  findById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(
        `Car with id ${id} not found or does not exist.`,
      );
    }
    return car;
  }

  create(createCarDto: CreateCarDto) {
    this.cars.push({
      id: uuid(),
      ...createCarDto,
    });
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    const carIndex = this.cars.findIndex((car) => car.id === id);
    if (carIndex === -1) {
      throw new NotFoundException(
        `Car with id ${id} not found or does not exist.`,
      );
    }
    this.cars[carIndex] = {
      ...this.cars[carIndex],
      ...updateCarDto,
    };
  }

  delete(id: string) {
    const carIndex = this.cars.findIndex((car) => car.id === id);
    if (carIndex === -1) {
      throw new NotFoundException(
        `Car with id ${id} not found or does not exist.`,
      );
    }
    this.cars.splice(carIndex, 1);
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
