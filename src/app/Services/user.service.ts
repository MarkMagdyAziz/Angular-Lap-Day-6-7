import { Injectable } from '@angular/core';
import { Observable ,catchError , throwError,retry,BehaviorSubject} from 'rxjs';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Makers } from './../Interfaces/makers';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOption
  constructor(private httpClient: HttpClient) {

    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': "sfkugkrbf"
      })
    }
  }
  private handleErr(err: HttpErrorResponse) {

    if (err.status)
      console.log('An Error occured', err.error, "msg: ", err.message, "status: ", err.status)

    return throwError(() => new Error("Erorr occured please try again"))

  }
  getAllCategories(): Observable<Makers[]> {
    return this.httpClient.get<Makers[]>(`${environment.MAKAPIURL}`).pipe(catchError((err) => {
      return throwError(err.message || "Server Error")
    })
    )
  }
  addMaker(maker: Makers): Observable<Makers> {
    return this.httpClient.post<Makers>(`${environment.MAKAPIURL}`, JSON.stringify(maker), this.httpOption).pipe(
      retry(2),
      catchError(this.handleErr)
    )
  }
  removeMaker(id: number) {
    return this.httpClient.delete(`${environment.MAKAPIURL}/${id}`).pipe(
      retry(2)
    )
  }

}