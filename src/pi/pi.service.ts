import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { DB_CONNECTION_NAME } from "../common/constants/db.contants";
import { PiDecimalEntity } from "../common/constants/entities/pi_decimal.entity";
import { IsNull, Not, Repository } from "typeorm";

@Injectable()
export class PiService {

    constructor(@InjectRepository(PiDecimalEntity, DB_CONNECTION_NAME)
                private piDecimalRepo: Repository<PiDecimalEntity>) {
    }

    async getCurrentPi() {
        const latestPi = await this.piDecimalRepo.findOne({
            where: { id: Not(IsNull()) },
            order: { iteration: "DESC" }
        });

        return latestPi?.result ?? 3;
    }
}
