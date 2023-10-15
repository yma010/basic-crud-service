import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getDatabaseConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  return {
    type: 'mysql',
    host: configService.get('AMAZON_AWS_HOST'),
    port: 3306,
    username: configService.get('AMAZON_AWS_MASTER_USER'),
    password: configService.get('AMAZON_AWS_MASTER_PASSWORD'),
    database: configService.get('AMAZON_AWS_DB_NAME'),
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    // ... other configurations
  };
};
