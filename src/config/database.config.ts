import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";

export const MysqlConfig:TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'testi',
    entities: [join(__dirname, '/../**/**.entity{.ts,.js}')],
    synchronize: true,
}