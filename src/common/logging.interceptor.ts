import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';   

@Injectable()
export class LoggingInterceptor implements NestInterceptor {

    private readonly logger = new Logger('Timing')

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const handler = `${context.getClass().name}.${context.getHandler().name}`;
        const start = Date.now();
        this.logger.log(`Before ${handler}`)
        return next
            .handle()
            .pipe(
                finalize(() => this.logger.log(`After ${handler} ${Date.now() - start}ms`))
            );
     }
}