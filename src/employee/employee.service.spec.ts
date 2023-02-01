import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
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
      providers: [EmployeeService],
    }).overrideProvider(EmployeeService).useValue(mockEmployeeService).compile();

    service = module.get<EmployeeService>(EmployeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
