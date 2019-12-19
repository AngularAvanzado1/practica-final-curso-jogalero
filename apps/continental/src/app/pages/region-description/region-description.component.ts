import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContinentalService } from '../../services/continental.service';
import { Observable } from 'rxjs';
import { RegionFacadeService } from '../../store/region/region-facade.service';

@Component({
  selector: 'jg-continental-region-description',
  templateUrl: './region-description.component.html',
  styleUrls: ['./region-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionDescriptionComponent implements OnInit {
  regionData$: Observable<any>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _regionService: RegionFacadeService
    ) { }

  ngOnInit() {
    const code = this._route.snapshot.paramMap.get('code');
    this._regionService.loadRegionsDetailsList(code);
    this.regionData$ = this._regionService.getRegionsDetailList$();
  }

  goToRegion(event){
    this._router.navigate([`country/${event.code}`]);

  }

}
