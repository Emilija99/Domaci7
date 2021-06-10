import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Proizvod } from '../models/proizvod';
import {catchError} from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProizvodiService {
  

  constructor(private httpClient:HttpClient) { }


  //vraca Observable<Movie[]>
  getAll(){

   return  this.httpClient
   .get<Proizvod[]>(environment.apiUrl+'/proizvodi')
   .pipe(catchError(errorHandler) )
  }

  getById(id:number){
    return this.httpClient
    .get<Proizvod>(`${environment.apiUrl}/proizvodi/${id}`)
    .pipe(catchError(errorHandler))
  }

  
 
}


const errorHandler=(error:HttpErrorResponse)=>{

  const errorMessage=(error.status===0)?
  `Can't connect to API ${error.error}`:
  `Backend returned code: ${error.status}`;

  return throwError(errorMessage);
    
}
