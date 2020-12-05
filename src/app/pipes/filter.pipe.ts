import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(filter: any, keys: string, term: string): any {
    if (!term) return filter;
    return (filter || []).filter((oficinasCoord:any) =>
      keys.split(',').some(key =>
        oficinasCoord.hasOwnProperty(key) && new RegExp(term, 'gi').test(oficinasCoord[key])
      )
    );
  }
}