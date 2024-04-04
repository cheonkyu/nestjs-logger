import { Injectable, ConsoleLogger, Inject } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';

@Injectable()
export class LoggerService extends ConsoleLogger {
  constructor(context: string, private readonly cls: ClsService) {
    super(context)
  }

  log(message: any, stack?: string, context?: string) {
    super.log(`[request:${this.cls.getId()}], ${message}`);
  }

  warn(message: any, stack?: string, context?: string) {
    super.warn(`[request:${this.cls.getId()}], ${message}`);
  }

  debug(message: any, stack?: string, context?: string) {
    super.debug(`[request:${this.cls.getId()}], ${message}`);
  }

  verbose(message: any, stack?: string, context?: string) {
    super.verbose(`[request:${this.cls.getId()}], ${message}`);
  }
  
  error(message: any, stack?: string, context?: string) {
    super.error(`[request:${this.cls.getId()}], ${message}`);
  }
}
