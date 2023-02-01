import { Controller, Get, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from './interfaces/auth.interface';

@Controller('auth')
export class AuthController {
constructor(private readonly authService:AuthService){}

@Get('/findByUsername/:username')
  findAllEmployees(@Param('username') username): Promise<Auth> {
    console.log("Hey"+username);
    
    return this.authService.findOne(username);
  }

}
