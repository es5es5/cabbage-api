import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Get()
  hello(): string {
    return 'Hello, Cabbage!'
  }
}
