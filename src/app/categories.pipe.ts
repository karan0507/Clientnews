import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categories'
})
export class CategoriesPipe implements PipeTransform {
  filtered = [];
  transform(items: any[], args: any): any {
    console.log(args);
    // console.log(items.id);
    return console.log(items.filter(item => item.categories_id !== args));
  }
}
