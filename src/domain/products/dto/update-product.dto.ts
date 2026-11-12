import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto.js';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    id: number;
    name: string;
    price?: number | undefined;
    updatedAt?: Date | undefined;
}

