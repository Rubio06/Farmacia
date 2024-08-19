import { EntityRepository, Repository } from 'typeorm';
import { Products } from './menu.entity';

@EntityRepository(Products)
export class MenuRepository extends Repository<Products> {}