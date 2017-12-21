import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export  class SearchPipes implements PipeTransform {
  transform( users, value) {
    return users.filter( user => {
      return user.name.includes(value);
    });
  }
}
@Pipe({
  name: 'filter_faculty'
})
export  class FilterFaculty implements PipeTransform {
  transform( users, value) {
    return users.filter( user => {
      return user.faculty.match(value);
    });
  }
}
@Pipe({
  name: 'filter_group'
})
export  class FilterGroup implements PipeTransform {
  transform( users, value) {
    return users.filter( user => {
      return user.group.match(value);
    });
  }
}
@Pipe({
  name: 'filter_course'
})
export  class FilterCourse implements PipeTransform {
  transform( users, value) {
    return users.filter( user => {
      return user.course.match(value);
    });
  }
}
