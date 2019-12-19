import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContinentalService } from '../../services/continental.service';
import { Observable } from 'rxjs';
import { RegionFacadeService } from '../../store/region/region-facade.service';

@Component({
  selector: 'jg-continental-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  country$: Observable<any>;

  constructor(
    private _route: ActivatedRoute,
    private _regionService: RegionFacadeService,
    private _router: Router
  ) { }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id');
    this._regionService.loadCountryList(id);
    this.country$ = this._regionService.getCountryList$();
  }

  goToRegion(id){
    this._router.navigate([`region-description/${id}`]);
  }

}
