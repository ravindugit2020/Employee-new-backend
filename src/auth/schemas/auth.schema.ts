import * as mongoes from 'mongoose'

export const AuthSchema=new mongoes.Schema({
    username:String,
    password:String,
});