import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Get()
  @ApiOperation({
    description: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjY0LCJ1c2VybmFtZSI6InN0cmluZyIsImlhdCI6MTY1NzUwNjE0NiwiZXhwIjoxNjU3NTIwNTQ2fQ.tbhlOJwUjdl23A65E3BkZVKXM3mItPcE-qmin8Swh6o'
  })
  hello(): string {
    return 'Hello, Cabbage!'
  }
}
