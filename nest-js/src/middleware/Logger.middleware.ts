import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    resolve(...args: any[]): MiddlewareFunction<any, any, any> | Promise<MiddlewareFunction<any, any, any>> {
        return async(req, res, next) => {
            console.log(
                `OriginalURL: ${JSON.stringify(req.originalUrl)}
                Headers: ${JSON.stringify(req.headers)}
                Params: ${JSON.stringify(req.params)}
                Body: ${JSON.stringify(req.body)}`);
            next();
        }
    }
}
