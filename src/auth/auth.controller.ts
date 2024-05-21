import {
  Controller,
  Get,
  HttpCode,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth-guard';
import { AuthRequest } from './models/authRequest';
import { IsPublic } from './decorators/is-public-decorator';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @Post('login')
  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  signIn(@Request() req: AuthRequest) {
    return this.authService.login(req.user);
  }

  @IsPublic()
  @Get('login')
  getHello(): string {
    return 'Login service';
  }
}
