import { Column, PrimaryColumn } from "typeorm";


export class Products {
    @PrimaryColumn()
    Code: number;

    @Column()
    ProductID: string;


    @Column()
    Product: string;


    @Column()
    ActivePrinciple: string;


    @Column()
    Category: string;


    @Column()
    Laboratory: string;


    

}
