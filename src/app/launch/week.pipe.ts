import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'week'
})
export class WeekPipe implements PipeTransform {

  transform(value: Date, position: string): any {
    const launchDay = new Date(value);
    if (position === 'start') {
      const day = (launchDay.getTime()) - (launchDay.getDay() * (24 * 60 * 60 * 1000));
      return new Date(day);
    } else {
      const day = (launchDay.getTime()) + ((7 - launchDay.getDay()) * 24 * 60 * 60 * 1000);
      return new Date(day);
    }
  }

}
