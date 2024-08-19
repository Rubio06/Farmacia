import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Products } from 'src/modules/menu/menu/entities/menu.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mssql',
  host: 'localhost',           // Nombre del servidor
  port: 1433,                  // Puerto por defecto para SQL Server
  username: 'user_enoc',       // Usuario creado
  password: 'camuz351',   // Contraseña del usuario
  database: 'Farmacia',
  entities: [Products],         // Nombre de la base de datos
  synchronize: false,          // Asegúrate de que esté configurado como false en producción
  options: {
    encrypt: true,             // Configura esto según tu entorno; `true` si estás usando SSL
    trustServerCertificate: true, // Solo si es necesario; generalmente para evitar errores con certificados autofirmados
    instanceName: 'MSSQLEXPRESS'  // Nombre de la instancia
  },

};

