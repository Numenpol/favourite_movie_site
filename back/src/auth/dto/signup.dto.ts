import { IsNotEmpty, IsString, IsEmail, MinLength } from "class-validator";

export class SignUpDto {

    @IsNotEmpty()
    @IsEmail({}, { message: "Enter a correct email"})
    readonly email: string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password: string;
}