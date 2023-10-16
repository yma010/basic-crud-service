import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;

  readonly address?: string;
  readonly profilePicture?: string;
  readonly role?: string;
  readonly dateOfBirth?: Date;
}
