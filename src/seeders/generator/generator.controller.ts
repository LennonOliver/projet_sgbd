import { Controller, Get, Param } from '@nestjs/common';
import { UsersGeneratorService } from '../users-generator/users-generator.service';

@Controller('generator')
export class GeneratorController {
  constructor(private readonly userGeneratorService: UsersGeneratorService) {}

  @Get('/users/:count')
  users(@Param('count') count: string) {
    const nbUsers = parseInt(count, 10);
    return this.userGeneratorService.generate(nbUsers);
  }
}
