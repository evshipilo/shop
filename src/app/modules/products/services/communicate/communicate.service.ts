import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ProductModel} from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CommunicateService {
  // можно так, а можно попробовать организовать эти каналы как
  // свойства некоторого объекта и передавать название канала (свойства)
  // тогда будет один метод для того, чтобы сделать publish
  private channel = new Subject<ProductModel>();
  public channel$ = this.channel.asObservable();

  private channel2 = new Subject<ProductModel>();
  public channel2$ = this.channel2.asObservable();

  publishData(data: ProductModel): void {
    this.channel.next(data);
  }

  publishData2(data: ProductModel): void {
    this.channel2.next(data);
  }

}
