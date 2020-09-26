import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  private static ok(body): Observable<HttpResponse<any>> {
    return of(new HttpResponse({ status: 200, body }))
      .pipe(delay(500)); // delay observable to simulate server api call
  }

  private static error(message): Observable<HttpResponse<any>> {
    return throwError({ error: { message } })
      .pipe(materialize(), delay(500), dematerialize());
  }

  private static register(body): Observable<HttpResponse<any>> {
    if (body.firstName && body.lastName && body.email && body.password) {
      return FakeBackendInterceptor.ok(body);
    } else {
      return FakeBackendInterceptor.error('Wrong format');
    }
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, body } = request;

    if (url.endsWith('/users') && method === 'POST') {
      return FakeBackendInterceptor.register(body);
    }

    return next.handle(request);
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
