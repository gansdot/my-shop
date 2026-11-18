import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    name: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    price: number;
}
