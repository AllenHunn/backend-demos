import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

@Injectable()
export class FakeAuthMiddleware implements NestMiddleware {
    resolve(...args: any[]): MiddlewareFunction<any, any, any> | Promise<MiddlewareFunction<any, any, any>> {
        return async(req, res, next) => {
            req.headers.user = { id: 25, name: 'Bob the builder' };
            next();
        }
    }
}
