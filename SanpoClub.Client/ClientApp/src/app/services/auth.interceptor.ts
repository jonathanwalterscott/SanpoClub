import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        if (!request.headers.has('Access-Control-Allow-Origin')) {
            request = request.clone({ headers: request.headers.set('Access-Control-Allow-Origin', '*') });
            request = request.clone({ headers: request.headers.set('Access-Control-Allow-Credentials', 'true') });
            request = request.clone({ headers: request.headers.set('Access-Control-Allow-Credentials', 'true') });
            request = request.clone({ headers: request.headers.set('Access-Control-Allow-Headers', 'Content-Type') });
            request = request.clone({ headers: request.headers.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
            }));
    }
}
