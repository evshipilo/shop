import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {TsInterceptor} from "./ts.interseptor";

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TsInterceptor,
    multi: true
  }
];
