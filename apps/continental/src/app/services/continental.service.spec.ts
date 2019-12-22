import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { ContinentalService } from './continental.service';

describe('ContinentalService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ContinentalService = TestBed.get(ContinentalService);
    expect(service).toBeTruthy();
  });

  it('getRegions should return', () => {
    const service: ContinentalService = TestBed.get(ContinentalService);
    service.getRegions().subscribe(
      res => {
        expect(res).toBeTruthy();
      }
    )

  });

  it('getCountry should return', () => {
    const service: ContinentalService = TestBed.get(ContinentalService);
    service.getCountry('AND').subscribe(
      res => expect(res).toBeTruthy()
    )

  });

  it('getRegionsDetail should return', () => {
    const service: ContinentalService = TestBed.get(ContinentalService);
    service.getRegionData('ECS').subscribe(
      res => expect(res).toBeTruthy()
    )

  });

});



