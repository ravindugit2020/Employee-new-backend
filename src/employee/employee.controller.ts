import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ResponseDTO } from 'src/dto/ResponseDTO';
import { EmployeeDTO } from './dto/employee.dto';
import { EmployeeService } from './employee.service';
import { Employee } from './interfaces/employee.interface';

@Controller('employee')
export class EmployeeController {

  constructor(private readonly employeeService:EmployeeService){}

  @Post('/save')
  createEmployee(@Body() employeeDto:EmployeeDTO): Promise<Employee> {
    return this.employeeService.create(employeeDto);
  }
  
  @Get('/findAll')
  findAllEmployees(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }
  @Get('/find')
  findAllEmployee(): String{
    return "Hello";
  }

  @Get('/count')
  countEmployees(): Promise<String> {
    return this.employeeService.countEmployees();
  }
  
  @Delete('delete/:id')
  delete(@Param('id') id): Promise<Employee> {
    return this.employeeService.delete(id);
  }

  @Put('/update/:id')
  update(@Body() updateEmployeeDto: EmployeeDTO, @Param('id') id): Promise<Employee> {
    return this.employeeService.update(id, updateEmployeeDto);
  }

  

  
}
