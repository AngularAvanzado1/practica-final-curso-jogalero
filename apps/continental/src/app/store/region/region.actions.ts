import { createAction, props } from '@ngrx/store';
import { Region } from '@a-pro-course/domain';

export const loadRegions = createAction(
  '[Region] Load Regions'
);

export const loadRegionsSuccess = createAction(
  '[Region] Load Regions Success',
  props<{ regionList: Region[] }>()
);

export const loadRegionsFailure = createAction(
  '[Region] Load Regions Failure',
  props<{ error: any }>()
);


export const loadRegionsDetailsList= createAction(
  '[RegionsDetails] Load RegionsDetailsList',
  props<{ code: string} >()
);

export const loadRegionsDetailsListSuccess = createAction(
  '[RegionsDetails] Load RegionsDetailsList Success',
  props<{ RegionsDetailsList: any[] }>()
);

export const loadRegionsDetailsListFailure = createAction(
  '[RegionsDetails] Load RegionsDetailsList Failure',
  props<{ error: any }>()
);


export const loadCountryList= createAction(
  '[CountryList] Load CountryList',
  props<{ id: string} >()
);

export const loadCountryListSuccess = createAction(
  '[CountryList] Load CountryList Success',
  props<{ CountryList: any[] }>()
);

export const loadCountryListFailure = createAction(
  '[CountryList] Load CountryList Failure',
  props<{ error: any }>()
);
