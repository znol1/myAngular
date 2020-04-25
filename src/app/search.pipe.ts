import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Elements, search: string = ''): any {
    if (!search.trim()) {
      return Elements;
    }
    return Elements.filter(el => {
      return el.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }

}
