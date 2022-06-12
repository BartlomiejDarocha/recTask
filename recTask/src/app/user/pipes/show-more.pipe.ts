import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showMore'
})
export class ShowMorePipe implements PipeTransform {

  transform(value: string, showMore: boolean): string {
    if (value.length > 120 && !showMore) {
      return value.substring(0,120);
    } else {
      return value;
    }
  }

}
