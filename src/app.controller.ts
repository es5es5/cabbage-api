import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Get()
  @ApiOperation({
    description: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjY0LCJ1c2VybmFtZSI6InN0cmluZyIsImlhdCI6MTY1NTc5OTU2NywiZXhwIjoxNjU1OTA3NTY3fQ.sz1Zg1pShpP4spKzCxFyMoR-XYImdKui9hgPlXwUxcA'
  })
  hello(): string {
    return 'Hello, Cabbage!'
  }
}
