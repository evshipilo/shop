import {Component, Inject, InjectionToken, Optional} from '@angular/core';
import {LocalStorageService} from '../../../core/services/local-storage/local-storage.service';
// import {appConfig} from '../../../../app.module'
import {generatedString, generatorFactory} from '../../../core/services/generator/generator.factory';
import {ConfigOptionsService} from '../../../core/services/config-options/config-options.service';
import {appConfigService} from '../../../core/services/constants/constant.service';
import {GeneratorService} from '../../../core/services/generator/generator.service';

export const appConfig = new InjectionToken<any>('appConfig');

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [
    GeneratorService,
    {provide: appConfig, useValue: appConfigService},
    {provide: generatedString, useFactory: generatorFactory(10), deps: [GeneratorService]},
    {provide: LocalStorageService, useClass: LocalStorageService}
  ]
})
export class FirstComponent {

  constructor(@Optional() private localStorageService: LocalStorageService,
              @Optional() private configOptionsService: ConfigOptionsService,
              @Optional() @Inject(appConfig) private config: any,
              @Optional() @Inject(generatedString) private gString: string,
              )
              {}

  description = 'Choose the products';

}
