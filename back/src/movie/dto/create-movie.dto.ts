import { IsNotEmpty, IsString } from "class-validator";

export class CreateMovieDto {

    @IsNotEmpty()
    @IsString()
    readonly title: string;
    
    @IsNotEmpty()
    @IsString()
    readonly director: string;
    
    @IsNotEmpty()
    @IsString()
    readonly date: string;
}