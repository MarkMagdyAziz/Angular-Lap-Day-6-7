import { environment } from './../../environments/environment.prod';
import { Iproduct } from './../Interfaces/iproduct';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,catchError , throwError,retry} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
httpOption
  constructor(private httpClient: HttpClient) {

    this.httpOption = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'Authorization': "sfkugkrbf"
        })
      }
  }
  private handleErr(err: HttpErrorResponse){

    if (err.status ) 
      console.log('An Error occured', err.error, "msg: " ,err.message , "status: ",err.status)

    return throwError(()=> new Error("Erorr occured please try again"))

  }
  getAllProducts() :Observable <Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(`${environment.PROAPIURL}`).pipe(catchError((err) =>
    {
      return throwError(err.message || "Server Error")
    })
    )
  }
 
  getProductById(id:number) :Observable <Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(`${environment.PROAPIURL}/${id}`).pipe(catchError((err) =>
    {
      return throwError(err.message || "Server Error")
    })
    )
  }
 
  addProduct(product: Iproduct): Observable<Iproduct>{
    return this.httpClient.post<Iproduct>(`${environment.PROAPIURL}`, JSON.stringify(product), this.httpOption).pipe(
      retry(2),
      catchError(this.handleErr)
    )
  }
  removeProduct(id: number) {
     
    return this.httpClient.delete(`${environment.PROAPIURL}/${id}`).pipe(catchError((err) =>
    {
      return throwError(err.message || "Server Error")
    })
    )
  }
  updateProduct(id: number , product:Iproduct) {
     
    return this.httpClient.put(`${environment.PROAPIURL}/${id}`,JSON.stringify(product), this.httpOption ).pipe(
      retry(2),
      catchError(this.handleErr)
    )
  }

}
