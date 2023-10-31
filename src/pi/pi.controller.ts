import { Controller, Get } from '@nestjs/common';
import { PiService } from './pi.service';

@Controller('pi')
export class PiController {
    constructor(private readonly piService: PiService) {
    }

    @Get('current')
    async getCurrentPi() {
        const pi = await this.piService.getCurrentPi();
        return { pi };
    }
}
