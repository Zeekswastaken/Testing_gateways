import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import typeOrmConfig from '../typeorm.config';
import { join } from 'path';
import { Chat } from './chat.entity';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Chat]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'pages'),
      serveRoot: '/login',
      serveStaticOptions: {
        index: false, // Disable directory indexing
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
