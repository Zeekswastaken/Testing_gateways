import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Chat } from "./src/chat.entity"
const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'postgres', // Update to "postgres" instead of "my-proj-postgres-1"
  port: 5432,
  username: 'zeeks',
  password: 'zeee',
  database: 'mynestdb',
  synchronize: true,
  logging: true,
  entities: [Chat],
};

export default typeOrmConfig;
