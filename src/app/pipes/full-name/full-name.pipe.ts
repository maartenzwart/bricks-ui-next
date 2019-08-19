import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform({firstName, insertion, lastName}: { firstName: string, insertion?: string, lastName: string }): string {
    let fullName = firstName;
    fullName += insertion ? ` ${insertion} ` : ' ';
    fullName += lastName;
    return fullName;
  }

}
