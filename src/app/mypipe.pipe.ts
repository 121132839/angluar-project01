import { Pipe, PipeTransform } from '@angular/core';


//转换为浮点数的自定义管道，取幂值
@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: number, exponent?: any): number {
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }

}
