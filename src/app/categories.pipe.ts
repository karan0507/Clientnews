import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categories'
})
export class CategoriesPipe implements PipeTransform {

    transform(values: any[], filter: string): any[] {
    console.log(values);
    if (!values || !values.length) return [];
    if (!filter) return values;
    // Filter items array, items which match will return true
    return values.filter(v => v.email.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
}
