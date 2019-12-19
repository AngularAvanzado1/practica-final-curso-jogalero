import { Action, createReducer, on } from '@ngrx/store';
import * as RegionActions from './region.actions';
import { Region } from '@a-pro-course/domain';
export const regionFeatureKey = 'region';

export interface RegionState {
  regionList: Region[];
  RegionsDetailsList: any[];
  CountryList: any[];
}

export const initialState: RegionState = {
  regionList: [],
  RegionsDetailsList: [],
  CountryList: []
};

const regionReducer = createReducer(
  initialState,

  on(RegionActions.loadRegions, state => state),
  on(RegionActions.loadRegionsSuccess, (state, {regionList}) => ({
    ...state, regionList,
  })),
  on(RegionActions.loadRegionsDetailsListFailure, (state, action) => state),

  on(RegionActions.loadRegionsDetailsList, state => state),
  on(RegionActions.loadRegionsDetailsListSuccess, (state, {RegionsDetailsList}) => ({
    ...state, RegionsDetailsList,
  })),
  on(RegionActions.loadRegionsDetailsListFailure, (state, action) => state),

  on(RegionActions.loadCountryList, state => state),
  on(RegionActions.loadCountryListSuccess, (state, {CountryList}) => ({
    ...state, CountryList,
  })),
  on(RegionActions.loadCountryListFailure, (state, action) => state)

);

export function reducer(state: RegionState | undefined, action: Action) {
  return regionReducer(state, action);
}
