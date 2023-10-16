import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getDatabaseConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  const isProduction = configService.get('NODE_ENV') === 'production';

  return {
    type: 'mysql',
    host: configService.get('AMAZON_AWS_HOST'),
    port: 3306,
    username: configService.get('AMAZON_AWS_MASTER_USER'),
    password: configService.get('AMAZON_AWS_MASTER_PASSWORD'),
    database: configService.get('AMAZON_AWS_DB_NAME'),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    // entities: [User, Destination, Listing, Collection],
    synchronize: !isProduction,
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
    migrationsTableName: 'migrations',
  };
};
