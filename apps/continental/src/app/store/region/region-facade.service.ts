import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Region } from '@a-pro-course/domain';
import * as fromRegionActions from './region.actions';
import * as fromSelectors from './region.selectors';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionFacadeService {

  constructor(private store: Store<Region[]>) {

   }

  public loadRegions(){
    this.store.dispatch(fromRegionActions.loadRegions());
  }

  public loadRegionsDetailsList(code){
    this.store.dispatch(fromRegionActions.loadRegionsDetailsList({ code }));
  }

  public loadCountryList(id){
    this.store.dispatch(fromRegionActions.loadCountryList({ id }));
  }

  public getRegionsList$(): Observable<Region[]> {
    return this.store.select(fromSelectors.getRegionsList);
  }

  public getRegionsDetailList$(): Observable<Region[]> {
    return this.store.select(fromSelectors.getRegionsDetailsList);
  }

  public getCountryList$(): Observable<Region[]> {
    return this.store.select(fromSelectors.getCountryList);
  }

}

