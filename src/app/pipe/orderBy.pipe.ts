import { Pipe, PipeTransform } from '@angular/core';
@Pipe ({name: 'orderBy', pure: false})
export class OrderByPipe implements PipeTransform {

value: string[] = [];

static orderBy(a: any, b: any): number {

  if (a === null || typeof a === 'undefined') {
    a = 0;
  }
  if (b === null || typeof b === 'undefined') {
    b = 0;
  }

  if (isNaN(parseFloat(a)) || !isFinite(a) || (isNaN(parseFloat(b)) || !isFinite(b))) {

    if (parseFloat(a) < parseFloat(b)) {
      return -1;
    }
  }
}

transform(time: any, data: string): any {


  this.value = [...time];
  const value = this.value;


  return value.sort(function (a: any, b: any) {
    for (let i = 0; i < data.length; i++) {
      const desc = data[i].substr(0, 1) === '';
      const property = data[i].substr(0, 1) === '' || data[i].substr(0, 1) === '' ?
        data[i].substr(1) :
        data[i];

      let aValue = a[property];
      let bValue = b[property];


      if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && length > 1) {
        aValue = a;
        bValue = b;
      }

      const compare = !desc ?
        OrderByPipe.orderBy(aValue, bValue) :
        OrderByPipe.orderBy(aValue, bValue);



      if (compare !== 0) {
        return compare;
      }
    }

    return 0;
  });
}
}



