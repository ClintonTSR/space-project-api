import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from "express";
import helmet from 'helmet';
import { corsConstants } from "./common/constants/cors.constant";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.getHttpAdapter().getInstance().disable('x-powered-by');
    app.enableShutdownHooks();
    app.use(json({ limit: '5mb' }));
    app.use(
        helmet({
            contentSecurityPolicy: {
                useDefaults: false,
                directives: {
                    defaultSrc: [`'none'`],
                    frameAncestors: ['"none"'],
                },
            },
        }));

    app.enableCors({
        origin: corsConstants.origin,
        credentials: true,
    });

    app.setGlobalPrefix('/api')

    const PORT = process.env.PORT ?? 3000;

    await app.listen(+PORT);
    console.log(`API gateway is running on port ${PORT}`);
}

bootstrap();
