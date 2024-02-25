import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { ContractSchema } from './../interfaces/contract-schema';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ContractSchemaService  {
  private contractSchemaUrl = 'http://127.0.0.1:8000/ContractSchema/';  // URL to web api

  constructor(private http: HttpClient,) { }

    /** GET heroes from the server */
    getContractSchemas(): Observable<ContractSchema[]> {
      return this.http.get<ContractSchema[]>(this.contractSchemaUrl)
        .pipe(
          catchError(this.handleError<ContractSchema[]>('getContracts', []))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  
}
