import {Pipe, PipeTransform} from '@angular/core';
import 'moment/locale/nl';
import 'moment/locale/nl-be';
import 'moment/locale/en-gb';

@Pipe({
  name: 'durationFormat',
  pure: false
})
export class DurationFormatPipe implements PipeTransform {

  transform(time: number): string {
    const hours = (time / 60);
    const resultHours = Math.floor(hours);
    const minutes = (hours - resultHours) * 60;
    const tempMinutes = Math.round(minutes);
    const resultMinutes = tempMinutes < 10 ? '0' + tempMinutes : tempMinutes;
    return `${resultHours}:${resultMinutes}`;
  }
}
