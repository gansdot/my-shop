import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';


@Injectable()
export class ProductsService {

  constructor(private readonly databaseService: DatabaseService) {}


  async create(createProductDto: CreateProductDto) {
    console.log(createProductDto);
    const product = await this.databaseService.product.create({
      data: {
        id: createProductDto.id,
        name: createProductDto.name,
        price: createProductDto.price
      }
    });
    return product;
  }

  async findAll() {
    return this.databaseService.product.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.product.findUnique({
      where: { id }
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return this.databaseService.product.update({
      where: { id },
      data: updateProductDto
    });
  }

  async remove(id: number) {
    return this.databaseService.product.delete({
      where: { id }
    });
  }
}
