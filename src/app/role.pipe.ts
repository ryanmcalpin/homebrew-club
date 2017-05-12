import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'role',
  pure: false
})
export class RolePipe implements PipeTransform {
  transform(input: Member[], filter) {
    if (filter === "All") {
      return input;
    } else {
      var output: Member[] = [];
      for (var i = 0; i < input.length; i++) {
        if (input[i].role === filter) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
