import { Pipe } from '@angular/core';

@Pipe({
  name: 'formatBRL'
})
export class FormatBrlPipe {
  transform(value: number){
    return value.toFixed(2).replace(".",",");
  }
}