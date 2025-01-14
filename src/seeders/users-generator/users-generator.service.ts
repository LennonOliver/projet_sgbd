import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

@Injectable()
export class UsersGeneratorService {
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
