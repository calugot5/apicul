import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsEmail({}, {
        message: "Formato de correo inválido"
})
    email: string

    @IsNotEmpty()
    firstName: string

    @IsNotEmpty()
    lastName: string
}
