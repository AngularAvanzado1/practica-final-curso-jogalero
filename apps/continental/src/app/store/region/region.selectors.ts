import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRegion from './region.reducer';

export const getRegionState = createFeatureSelector<fromRegion.RegionState>(
  fromRegion.regionFeatureKey
);

export const getRegionsList = createSelector(
  getRegionState,
  (state: fromRegion.RegionState) => state.regionList
);

export const getRegionsDetailsList = createSelector(
  getRegionState,
  (state: fromRegion.RegionState) => state.RegionsDetailsList
);

export const getCountryList = createSelector(
  getRegionState,
  (state: fromRegion.RegionState) => state.CountryList
);
