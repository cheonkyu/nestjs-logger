import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './logger/logger.module';
import { ClsModule } from 'nestjs-cls';
import { v4 as uuid } from 'uuid';

@Module({
  imports: [
    ClsModule.forRoot({
        global: true,
        middleware: {
          mount: true,
          generateId: true,
          idGenerator: (req: Request) =>
              req.headers['X-Request-Id'] ?? uuid()
        },
    }), LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
