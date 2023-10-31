import { Module } from '@nestjs/common';
import { PiModule } from "../pi/pi.module";
import { CircumferenceController } from "./circumference.controller";

@Module({
    imports: [PiModule],
    controllers: [CircumferenceController],
    providers: [],
})
export class CircumferenceModule {
}
