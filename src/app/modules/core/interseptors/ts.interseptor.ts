import {Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams, HttpEventType } from '@angular/common/http';

import { Observable } from 'rxjs';
import {finalize} from "rxjs/operators";

@Injectable()
export class TsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // request interceptor
    const start = Date.now();
    let clonedRequest;
    if (req.url.includes('products')) {
      clonedRequest = req.clone({
        params: new HttpParams()
          .set('ts_interceptor', (performance.now()).toString())
        // clear the body
        // body: null
      });
      console.log(clonedRequest);
    } else {
      clonedRequest = req;
    }

    return next.handle(clonedRequest)
      .pipe(
        // Log when response observable either completes or errors
        finalize(() => {
          const elapsed = Date.now() - start;
          const msg = `${req.method} "${req.urlWithParams}" in ${elapsed} ms.`;
          if(req.method==='GET') console.log(msg);
        })
      );
  }
}
