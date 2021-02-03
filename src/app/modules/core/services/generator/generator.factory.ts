import {InjectionToken} from '@angular/core';
import {GeneratorService} from './generator.service';

export const generatedString = new InjectionToken<any[]>('generator');


interface ReturnedFunction {
  (data: GeneratorService): string;
}

export function generatorFactory(n: number): ReturnedFunction {
  return (data: GeneratorService): string => data.generate(n);
}
