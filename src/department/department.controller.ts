import { Controller ,Body, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentDTO } from './dto/department.dto';
import { Department } from './interface/department.interface';

@Controller('department')
export class DepartmentController {

  constructor(private readonly departmentService:DepartmentService){}

  @Post('/save')
  createDepartment(@Body() departmentDTO: DepartmentDTO): Promise<Department> {
    return this.departmentService.create(departmentDTO);
  }

  @Get('/findAll')
  findAllDepartment(): Promise<Department[]> {
    return this.departmentService.findAll();
  }
  @Get('/count')
  countDepartments(): Promise<String> {
    return this.departmentService.count();
  }
}
