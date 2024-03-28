import { Body, Controller, ForbiddenException, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthPayload } from './interfaces/auth.interface';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({
    description: 'Autentica o usuário',
  })
  @ApiResponse({
    type: ForbiddenException,
    description: 'Senha inválida',
  })
  @Post()
  async login(@Body() auth: AuthPayload) {
    return await this.authService.validateUserByPassword(auth);
  }
}
