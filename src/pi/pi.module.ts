import { Module } from '@nestjs/common';
import { PiService } from './pi.service';
import { PiController } from './pi.controller';
import { DB_CONNECTION_NAME } from "../common/constants/db.contants";
import { PiDecimalEntity } from "../common/constants/entities/pi_decimal.entity";
import { PiTicketEntity } from "../common/constants/entities/pi_ticket.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature(
        [PiTicketEntity, PiDecimalEntity],
        DB_CONNECTION_NAME)],
    controllers: [PiController],
    providers: [PiService],
    exports: [PiService]
})
export class PiModule {
}
