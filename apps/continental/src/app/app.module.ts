import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '../../../../libs/shared/ui/src/lib/ui.module';
import { RegionComponent } from './pages/region/region.component';
import { HttpClientModule } from '@angular/common/http';
import { FilteridPipe } from './pipes/filterid/filterid.pipe';
import { RegionDescriptionComponent } from './pages/region-description/region-description.component';
import { CountryComponent } from './pages/country/country.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule, RouterState, routerReducer } from '@ngrx/router-store';
import * as fromRegion from './store/region/region.reducer';
import { RegionEffects } from './store/region/region.effects';


const appRoutes: Routes = [
  { path: '', component: RegionComponent },
  { path: 'region-description/:code', component: RegionDescriptionComponent },
  { path: 'country/:id', component: CountryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegionComponent,
    FilteridPipe,
    RegionDescriptionComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabled' }),
    UiModule,
    StoreModule.forRoot(
      {
        router: routerReducer
      },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
    StoreModule.forFeature(fromRegion.regionFeatureKey, fromRegion.reducer),
    EffectsModule.forFeature([RegionEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
