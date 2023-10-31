import { Module } from '@nestjs/common';
import { PiModule } from './pi/pi.module';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DB_CONNECTION_NAME } from "./common/constants/db.contants";
import { PiTicketEntity } from "./common/constants/entities/pi_ticket.entity";
import { PiDecimalEntity } from "./common/constants/entities/pi_decimal.entity";
import { CircumferenceController } from './circumference/circumference.controller';
import { PiController } from "./pi/pi.controller";
import { CircumferenceModule } from './circumference/circumference.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
        }),
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            imports: [ConfigModule],
            name: DB_CONNECTION_NAME,
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DB_HOST'),
                port: configService.get('DB_PORT'),
                username: configService.get('DB_USERNAME'),
                password: configService.get('DB_PASSWORD'),
                database: configService.get('DB_DATABASE'),
                synchronize: true, //configService.get('NODE_ENV') === 'development',
                entities: [PiTicketEntity, PiDecimalEntity],

            }),
        }),
        PiModule,
        CircumferenceModule
    ],
    providers: [],
    controllers: [PiController, CircumferenceController],
})
export class AppModule {
}
