import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  setItem(key: string, val: any): void{
    localStorage.setItem(key, JSON.stringify(val));
  }

  getItem(key: string): any{
   return JSON.parse(localStorage.getItem(key));
  }

}
