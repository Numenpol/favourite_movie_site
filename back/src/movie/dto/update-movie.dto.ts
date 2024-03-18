import { IsOptional, IsString } from "class-validator";

export class UpdateMovieDto {

    @IsOptional()
    @IsString()
    readonly title: string;

    @IsOptional()
    @IsString()
    readonly director: string;

    @IsOptional()
    @IsString()
    readonly date: string;
}