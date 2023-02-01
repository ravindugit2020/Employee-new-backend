import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { DepartmentSchema } from './schemas/department.schemas';

@Module({
  imports:[MongooseModule.forFeature([{name:'Department',schema:DepartmentSchema}])],
  controllers: [DepartmentController],
  providers: [DepartmentService]
})
export class DepartmentModule {}
