import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentModule } from './department/department.module';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [EmployeeModule,MongooseModule.forRoot('mongodb://localhost:27017/employeedb'), DepartmentModule, AuthModule, ChatModule],
  controllers: [AppController ],
  providers: [AppService],

})
export class AppModule {}
