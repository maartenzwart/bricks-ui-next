import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform({givenName, insertion, familyName}: { givenName: string, insertion?: string, familyName: string }): string {
    let fullName = givenName;
    fullName += insertion ? ` ${insertion} ` : ' ';
    fullName += familyName;
    return fullName;
  }

}
