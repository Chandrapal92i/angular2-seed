import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.sort(function(a, b){
      if(a[args.property] < b[args.property]){
        return -1 * args.direction;
      } else if( a[args.property] > b[args.property]){
        return 1 * args.direction;
      } else {
        return 0;
      }
    });
  }

}
