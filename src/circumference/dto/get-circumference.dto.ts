import { IsNotEmpty, IsString } from "class-validator";

export class GetCircumferenceDto {
    @IsString()
    @IsNotEmpty()
    planetName!: string
}