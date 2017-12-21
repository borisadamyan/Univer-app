import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'sortBy'})

export class OrderPipe implements PipeTransform{
  transform(users, args: string) {
    users.sort((a: any, b: any) => {
      if ( a[args] < b[args] ){
        return -1;
      }else if( a[args] > b[args] ){
        return 1;
      }else{
        return 0;
      }
    });
    return users;
  }
}
