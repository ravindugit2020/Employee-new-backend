import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Department } from './interface/department.interface';

@Injectable()
export class DepartmentService {
    constructor(@InjectModel('Department') private readonly departmentModel:Model<Department>){}

    async findAll():Promise<Department[]>{
        return await this.departmentModel.find();
    }
    async count():Promise<any>{
        return await this.departmentModel.count();
    }

    async create(department:Department):Promise<Department>{
        const createDepartment=new this.departmentModel(department);
        return await createDepartment.save();
    }
}
