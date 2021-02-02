import {Injectable} from '@angular/core';
import {ConfigModel} from '../../models/ConfigModel';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private config: ConfigModel;

  setConfig(config: { id?: number, login?: string, email?: string }): void {
    this.config = {...this.config, ...config};
  }

  getConfig(): ConfigModel {
    return this.config;
  }

}
