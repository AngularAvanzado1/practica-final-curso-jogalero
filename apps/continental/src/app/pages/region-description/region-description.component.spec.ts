import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionDescriptionComponent } from './region-description.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UiModule } from '../../../../../../libs/shared/ui/src/lib/ui.module';
import { Store } from '@ngrx/store';
import { RegionFacadeService } from '../../store/region/region-facade.service';


describe('GIVEN: a RegionDescription component', () => {
  let component: RegionDescriptionComponent;
  let fixture: ComponentFixture<RegionDescriptionComponent>;


  describe('WHEN: the RegionDescription component is compiled', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ RegionDescriptionComponent ],
        imports: [RouterTestingModule, UiModule],
        providers: [
          RegionFacadeService,
          {
            provide: Store,
            useValue: {
              dispatch: jest.fn(),
              pipe: jest.fn()
            }
          }
        ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(RegionDescriptionComponent);
      component = fixture.componentInstance;
    });


    it('THEN: should create', () => {
      expect(component).toBeTruthy();
    });

    it('THEN: should show regions', (done) => {
      const store = TestBed.get(Store);
      const regionService = new RegionFacadeService(store);
      regionService.getRegionsDetailList$().subscribe(
        res => {
          expect(res).toBeTruthy();
          done();
        }
      )
    });


  });
});
