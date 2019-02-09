import { Module, MiddlewareConsumer } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './cat.entity';
import { LoggerMiddleware } from 'src/middleware/Logger.middleware';
import { FakeAuthMiddleware } from 'src/middleware/FakeAuth.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FakeAuthMiddleware, LoggerMiddleware)
      .forRoutes('cat');
  }
}
