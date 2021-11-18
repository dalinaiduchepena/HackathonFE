import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { SchemeInfo, schemeModel } from './schemeinfo';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchemedetailsService {

  constructor(private http:HttpClient) { }

  public getUrl:string = "https://localhost:44313/scheme/ExtractWebsite";

  public getSchemeInfo() : Observable<schemeModel[]>  {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     //'Authorization': "Bearer "+localStorage.getItem('token')
    //   })
    // }
    return this.http.get<schemeModel[]>(this.getUrl);
  }

  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}

