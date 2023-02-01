import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeDTO } from './dto/employee.dto';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service'

describe('EmployeeController', () => {
  let controller: EmployeeController;

  const mockEmployeeService={
    create:jest.fn(dto=>{
      return{
        id: Date.now(),
        ...dto
      }
    })
  }
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeController],
      providers:[EmployeeService]
    }).overrideProvider(EmployeeService).useValue(mockEmployeeService).compile();

    controller = module.get<EmployeeController>(EmployeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a employee', () => {
    expect(controller.createEmployee({name:'Amara',department:'HR',email:'amara@gmail.com',mobile:'011',dob:'12',doj:'12',city:'colombo',country:'srilanka',address:'homagama',status:'act'})).toEqual({
      id:expect.any(Number),
      name:'Amara',department:'HR',email:'amara@gmail.com',mobile:'011',dob:'12',doj:'12',city:'colombo',country:'srilanka',address:'homagama',status:'act'
    })
  });
});
