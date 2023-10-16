import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

enum UserRoleEnum {
  USER = 'USER',
  ADMIN = 'ADMIN',
}
export class UpdateUserDto extends PartialType(CreateUserDto) {
  email?: string;
  password?: string;
  address?: string;
  profilePicture?: string;
  role?: UserRoleEnum; // Assuming you have some kind of UserRoleEnum or similar type for role
  dateOfBirth?: Date;
}
