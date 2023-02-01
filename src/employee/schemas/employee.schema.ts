import * as mongoes from 'mongoose'

export const EmployeeSchema=new mongoes.Schema({
    name:String,
    department:String,
    email:String,
    mobile:String,
    dob:String,
    city:String,
    doj:String,
    country:String,
    address:String,
    status:String
});