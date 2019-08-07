import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/nl';
import 'moment/locale/nl-be';
import 'moment/locale/en-gb';
import DurationConstructor = moment.unitOfTime.DurationConstructor;

@Pipe({
  name: 'durationFormat',
  pure: false
})
export class DurationFormatPipe implements PipeTransform {

  transform(time: number, unit: DurationConstructor = 'minutes'): string {
    const duration = moment.duration(time, unit).asHours().toString();
    const hours = duration.split('.')[0];
    let minutes = '';
    let durationMinutes = parseInt(duration.split('.')[1], 10);
    if (durationMinutes) {
      durationMinutes = (durationMinutes * 60) / 100;
      minutes = durationMinutes < 10 ? durationMinutes.toString() + '0' : durationMinutes.toString();
    }
    return `${hours || '0'}:${minutes || '00'}`;
  }
}
