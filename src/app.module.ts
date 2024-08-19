import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './modules/menu/menu/menu.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './core/database/database.config';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig),
    MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
