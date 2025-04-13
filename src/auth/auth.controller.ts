// auth.controller.ts
import { Controller, Post, Body, Res, Get, Req, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response, Request } from 'express';
import { LoginDto } from './dto/login.dto';  // Import DTO

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Body() loginDto: LoginDto,  // Gantilah parameter dengan DTO
    @Res({ passthrough: true }) res: Response
  ) {
    const { username, password } = loginDto;

    // Validasi user menggunakan username dan password
    const user = await this.authService.validateUser(username, password);
    if (!user) throw new UnauthorizedException();

    const { accessToken } = await this.authService.login(user);

    // Set cookie dengan JWT
    res.cookie('jwt', accessToken, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/', 
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 hari
    });

    return { message: 'Login successful' };
  }

  @Post('logout')
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('jwt');
    return { message: 'Logged out' };
  }

  @Get('me')
  async me(@Req() req: Request) {
    const token = req.cookies['jwt'];
    if (!token) throw new UnauthorizedException();

    const payload = await this.authService.verifyToken(token); // pastikan verifikasi token dengan await
    return { 
      userId: payload.sub,
      username: payload.username,
     }; 
  }
}
