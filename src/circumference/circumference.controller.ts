import { Controller, Get, Query } from '@nestjs/common';
import { PiService } from "../pi/pi.service";
import { GetCircumferenceDto } from "./dto/get-circumference.dto";
import { PLANET_DIAMETER, PlanetName } from "../common/constants/planet-diameter.constants";

@Controller('circumference')
export class CircumferenceController {
    constructor(private piService: PiService) {
    }

    @Get()
    async getCircumference(@Query() { planetName }: GetCircumferenceDto) {
        const diameter = PLANET_DIAMETER[planetName as PlanetName];

        if (!diameter) {
            return "Invalid Planet Name";
        }

        const pi = await this.piService.getCurrentPi();

        return (diameter * +pi).toFixed(2)
    }
}
