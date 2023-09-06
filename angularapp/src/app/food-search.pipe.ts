import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foodSearch'
})
export class FoodSearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
