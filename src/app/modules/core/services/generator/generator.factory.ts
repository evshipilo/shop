import {InjectionToken} from '@angular/core';
import {GeneratorService} from './generator.service';

export const generatedString = new InjectionToken<any[]>('generator');


export function generatorFactory(n: number): any {
  return (data: GeneratorService): string => data.generate(n);
}
