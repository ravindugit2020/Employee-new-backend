import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeSchema } from './schemas/employee.schema';
import { EmployeeController } from './employee.controller';

@Module({
  imports:[MongooseModule.forFeature([{name:'Employee',schema:EmployeeSchema}])],
  controllers:[EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
