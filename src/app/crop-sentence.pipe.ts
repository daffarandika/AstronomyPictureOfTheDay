import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cropSentence'
})
export class CropSentencePipe implements PipeTransform {

  transform(value: string): string {
    const sentenceSize = 100;
    let res = value.split(" ");
    if (res.length > sentenceSize) {
      return `${res.splice(0,sentenceSize).join(" ")} ...`;
    } else {
      return value;
    }
  }

}
