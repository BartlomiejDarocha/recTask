import { HttpInterceptor, HttpHeaders, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, finalize, catchError } from 'rxjs';
import { LoaderService } from '../loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  private headers = new HttpHeaders({
    'Content-type': 'application/json'
  })
  constructor(private loaderService: LoaderService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    
    this.loaderService.show();
    console.log('intercerpt works');
    request = request.clone({ headers: this.headers });
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error( error.message, 'interceptor Error');
        return throwError(() => new Error(error.message))
      }),
      finalize(() => {
        this.loaderService.hide();
      })
    )
  }
}
