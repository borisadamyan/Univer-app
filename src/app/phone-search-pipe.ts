import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchPhone'
})

export  class SearchPhonePipes implements PipeTransform {
  transform( users, value) {
    return users.filter( user => {
      return user.phone.includes(value);
    });
  }
}
