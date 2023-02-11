import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(date: Date, i: number) {
    return moment(new Date(date)).add(-i, 'days').format('DD/MM/YYYY');

  }

}