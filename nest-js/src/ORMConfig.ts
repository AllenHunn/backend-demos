import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'sqlite',
            database: 'database.sqlite',
            synchronize: true,
            logging: false,
            entities: [
            __dirname + '/**/*.entity{.ts,.js}',
            ],
            migrations: [
            __dirname + '/**/*.migration{.ts,.js}',
            ],
        };
    }
}
