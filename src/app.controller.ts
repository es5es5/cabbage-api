import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Get()
  @ApiOperation({
    description: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjY0LCJ1c2VybmFtZSI6InN0cmluZyIsImlhdCI6MTY1NjA1MzEzNiwiZXhwIjoxNjU2MDY3NTM2fQ.aWT1nBa0TXFroE8yK-ZN_fhikzfV3UJWmx5f_P7i5O4'
  })
  hello(): string {
    return 'Hello, Cabbage!'
  }
}
