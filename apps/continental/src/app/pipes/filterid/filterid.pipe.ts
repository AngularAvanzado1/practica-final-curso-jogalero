import { Pipe, PipeTransform } from '@angular/core';
import { Region } from '../../../../../../libs/shared/domain/src/lib/region';

@Pipe({
  name: 'filterid'
})
export class FilteridPipe implements PipeTransform {
  transform(regions: Region[], isFilterInAction: Boolean): any {
    if(isFilterInAction){
      return regions.filter( region => region.id.length )
    } else{
      return [...regions];
    }

  }

}
