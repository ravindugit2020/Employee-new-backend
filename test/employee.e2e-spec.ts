import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { EmployeeModule } from '../src/employee/employee.module';
import { EmployeeService } from '../src/employee/employee.service';

describe('EmployeeController (e2e)', () => {
  let app: INestApplication;
  const mockEmployees={
    name:'Amara',
    department:'HR',
    email:'amara@gmail.com',
    mobile:'011',dob:'12',
    doj:'12',city:'colombo',
    country:'srilanka',
    address:'homagama',
    status:'act'
  }
  const mockEmployeeService={
    create:jest.fn().mockResolvedValue({})
  }
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      
    
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/find (GET)', () => {
    return request(app.getHttpServer())
      .get('/find')
      .expect(404)
  });
  it('/findAll (GET)', () => {
    return request(app.getHttpServer())
      .get('/employee/findAll')
      .expect(200)
  });
});
