import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContinentalService {

  constructor(private http: HttpClient) { }

  getRegions(): Observable<any> {
      return this.http.get( 'http://api.worldbank.org/v2/region/?format=json').pipe(
        map(res => res[1])
      );
  }

  getRegionData(code: string): Observable<any> {
    return this.http.get( `http://api.worldbank.org/v2/region/${code}/country?per_page=1000&format=json`).pipe(
      tap( res => console.log(res)),
      map(res => res[1])
    );
  }

  getCountry(id: string): Observable<any> {
    console.log("PRAMETRO: ", id);
    return this.http.get( `http://api.worldbank.org/V2/country/${id}?format=json`).pipe(
      tap( res => console.log(res)),
      map(res => res[1])
    )
  }
}
