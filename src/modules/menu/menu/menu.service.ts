// src/menu/menu.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuRepository } from './entities/menu.repository';
import { Products } from './entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuRepository)
    private readonly menuRepository: MenuRepository,
  ) {}

  async create(menu: Products): Promise<Products> {
    return this.menuRepository.save(menu);
  }

  // Otros métodos para leer, actualizar y eliminar
}

  // findAll() {
  //   return `This action returns all menu`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} menu`;
  // }

  // update(id: number, updateMenuDto: UpdateMenuDto) {
  //   return `This action updates a #${id} menu`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} menu`;
  // }

