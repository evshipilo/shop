import {Injectable} from '@angular/core';

@Injectable()
export class GeneratorService {

  randomInteger(max: number): number {
    const rand = -0.5 + Math.random() * (max + 1);
    return Math.round(rand);
  }

  generate(n: number): string {
    let result = '';
    const symbols = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    const count = symbols.length - 1;
    for (let i = 0; i < n; i++) {
      const position = this.randomInteger(count);
      result = result + symbols.substring(position, position + 1);
    }
    return result;
  }


}
