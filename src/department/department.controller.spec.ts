import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';

describe('DepartmentController', () => {
  let controller: DepartmentController;
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
      controllers: [DepartmentController],
      providers:[DepartmentService]
    }).overrideProvider(DepartmentService).useValue(mockEmployeeService).compile();

    controller = module.get<DepartmentController>(DepartmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should create a Department', () => {
    expect(controller.createDepartment({name:'HR'})).toEqual({
      id:expect.any(Number),
      name:'HR'
    })
  });
});
