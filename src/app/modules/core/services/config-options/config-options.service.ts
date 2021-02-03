import {Injectable} from '@angular/core';
import {ConfigModel} from '../../models/ConfigModel';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private config: ConfigModel;

  setConfig(config: Partial<ConfigModel>): void {
    this.config = {...this.config, ...config};
  }

  getConfig(): ConfigModel {
    return this.config;
  }

}
