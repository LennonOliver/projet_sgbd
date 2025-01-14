import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class UsersGeneratorService {
  constructor(private readonly userService: UsersService) {}
  generate() {
    return {
      email: faker.internet.email(),
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      password: faker.internet.password(),
      username: faker.internet.username(),
    };
  }
}
