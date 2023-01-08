import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: new Date().getTime(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
      createdAt: new Date().getTime(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new Error('Brand whit id ${id} not found');
    }
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new Error('Brand whit id ${id} not found');
    }
    brand.name = updateBrandDto.name.toLowerCase();
    brand.updatedAt = new Date().getTime();
    return brand;
  }

  remove(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new Error('Brand whit id ${id} not found');
    }
    this.brands = this.brands.filter((brand) => brand.id !== id);
    return brand;
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
