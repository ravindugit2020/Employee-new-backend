import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth } from './interfaces/auth.interface';

@Injectable()
export class AuthService {
    constructor(@InjectModel('Auth') private readonly authModule:Model<Auth>){}
    async findOne(username:String):Promise<Auth>{
        return await this.authModule.findOne({'username':username});
    }

}
