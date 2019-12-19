import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { ContinentalService } from '../../services/continental.service';
import { Region } from '@a-pro-course/domain';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RegionFacadeService } from '../../store/region/region-facade.service';

@Component({
  selector: 'jg-continental-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionComponent implements OnInit {
  @ViewChild('filterId', {static: true}) input: ElementRef;

  regions$: Observable<Region[]>
  isFilterInAction: Boolean;
  constructor(
    private _continentalService: ContinentalService,
    private _router: Router,
    private _regionService: RegionFacadeService
    ) { }

  ngOnInit() {
    this._regionService.loadRegions();
    this.regions$ = this._regionService.getRegionsList$();
    this.isFilterInAction = this.input.nativeElement.checked;
  }

  goToRegion(event){
    this._router.navigate([`region-description/${event.code}`]);

  }

  checkValue(){
    this.isFilterInAction = this.input.nativeElement.checked;
  }

}
