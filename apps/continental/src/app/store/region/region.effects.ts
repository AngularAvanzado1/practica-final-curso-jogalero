import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as RegionActions from './region.actions';
import { ContinentalService } from '../../services/continental.service';



@Injectable()
export class RegionEffects {
  loadRegions$ = createEffect(() => this.actions$.pipe(
    ofType(RegionActions.loadRegions),
    concatMap(() =>
      this.continentalService.getRegions().pipe(
        map(data => RegionActions.loadRegionsSuccess({ regionList: data })),
        catchError(error => of(RegionActions.loadRegionsFailure({ error }))))
    )
  ));

  loadRegionsDetailsList$ = createEffect(() => this.actions$.pipe(
    ofType(RegionActions.loadRegionsDetailsList),
    concatMap((action) =>
      this.continentalService.getRegionData(action.code).pipe(
        map(data => RegionActions.loadRegionsDetailsListSuccess({ RegionsDetailsList: data })),
        catchError(error => of(RegionActions.loadRegionsFailure({ error }))))
    )
  ));

  loadCountryList$ = createEffect(() => this.actions$.pipe(
    ofType(RegionActions.loadCountryList),
    concatMap((action) =>
      this.continentalService.getCountry(action.id).pipe(
        map(data => RegionActions.loadCountryListSuccess({ CountryList: data })),
        catchError(error => of(RegionActions.loadCountryListFailure({ error }))))
    )
  ));



  constructor(
    private actions$: Actions,
    private continentalService: ContinentalService
    ) {}

}
