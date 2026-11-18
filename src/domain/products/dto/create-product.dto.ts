import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
    
    id: number;
    name: string;

    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(0)
    price: number;
}
