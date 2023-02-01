import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './interfaces/employee.interface';

@Injectable()
export class EmployeeService {
  
    constructor(@InjectModel('Employee') private readonly employeeModel:Model<Employee>){}

        async findAll():Promise<Employee[]>{
            return await this.employeeModel.find();
        }

        async create(employee:Employee):Promise<Employee>{
            const createEmployee=new this.employeeModel(employee);
            return await createEmployee.save();
        }
        async update(id: string, employee: Employee): Promise<Employee> {
            return await this.employeeModel.findByIdAndUpdate(id, employee, { new: true });
          }
        async delete(id:String):Promise<Employee>{
            return await this.employeeModel.findByIdAndRemove(id);
        }
        async countEmployees():Promise<any>{
            return await this.employeeModel.count();
        }

        

    
}
