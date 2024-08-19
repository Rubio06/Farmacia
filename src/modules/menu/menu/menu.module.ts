import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from 'src/core/database/database.config';
import { MenuRepository } from './entities/menu.repository';
import { Products } from './entities/menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Products, MenuRepository])],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
