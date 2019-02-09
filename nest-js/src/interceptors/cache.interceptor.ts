import { Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Cache } from '../cache';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
    constructor(private readonly className: string) {
        this.className = className;
    }

    intercept(
        context: ExecutionContext,
        call$: Observable<any>,
    ): Observable<any> {
        const id: string = context.switchToHttp().getRequest().param('id');
        const fromCache = Cache.getFromCache(this.className, id);

        if (fromCache) {
            console.log('got from cache');
            return of(fromCache);
        }

        return call$;
    }
}
