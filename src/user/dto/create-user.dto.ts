import { IsEmail, IsNotEmpty, isNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsEmail({}, {
        message: "Formato de correo inválido"
    })
    email: string

    @IsNotEmpty()
    firstName: string

    @IsNotEmpty()
    lastName: string

    @IsNotEmpty()
    address: string

    @IsNotEmpty()
    phoneNumber: string
}
