import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private _refreshNeeded$ = new Subject<void>();
  get refreshNeeded$(){
    return this._refreshNeeded$;
  }
  constructor(private http: HttpClient) { }

  getBook(){
    return this.http.get("http://127.0.0.1:8000/api/books", {
      headers : new HttpHeaders({
        API_KEY: 'ABCDEFGHIJKL'
      })
    })
  }
  addBook(data: any){
    return this.http.post("http://127.0.0.1:8000/api/books",data, {
      headers : new HttpHeaders({
        API_KEY: 'ABCDEFGHIJKL'
      })
    })
  }
  getUsers(){
    return this.http.get("http://127.0.0.1:8000/api/users" , {
      headers : new HttpHeaders({
        API_KEY: 'ABCDEFGHIJKL'
      })
    })

  }
  getUsersById(data:any){
    return this.http.get("http://127.0.0.1:8000/api/users/"+data , {
      headers : new HttpHeaders({
        API_KEY: 'ABCDEFGHIJKL'
      })
    })
  }
  getBookById(data:any){
    return this.http.get("http://127.0.0.1:8000/api/books/"+data, {
      headers : new HttpHeaders({
        API_KEY: 'ABCDEFGHIJKL'
      })
    })
  }
  // http://127.0.0.1:8000/api/users/4
  addUser(data: any){
    return this.http.post("http://127.0.0.1:8000/api/auth/register",data,  {
      headers : new HttpHeaders({
        API_KEY: 'ABCDEFGHIJKL'
      })
    })
  }
  editUser(data: any, postData: any){
    return this.http.put("http://127.0.0.1:8000/api/users/"+data, postData, {
      headers : new HttpHeaders({
        API_KEY: 'ABCDEFGHIJKL'
      })
    })
  }
  deleteUser(data:any){
    this._refreshNeeded$.next();
    return this.http.delete("http://127.0.0.1:8000/api/users/"+data , {
      headers : new HttpHeaders({
        API_KEY: 'ABCDEFGHIJKL'
      })
    })
  }
  deleteBook(data:any){
    this._refreshNeeded$.next();
    return this.http.delete("http://127.0.0.1:8000/api/books/"+data, {
      headers : new HttpHeaders({
        API_KEY: 'ABCDEFGHIJKL'
      })
    } )
  }
  editBook(data:any, postData:any){
    return this.http.put("http://127.0.0.1:8000/api/books/"+data, postData , {
      headers : new HttpHeaders({
        API_KEY: 'ABCDEFGHIJKL'
      })
    })
  }
  // http://127.0.0.1:8000/api/auth/login
  login(postData: any){

    return this.http.post("http://127.0.0.1:8000/api/auth/login", postData, {
      headers : new HttpHeaders({
        API_KEY: 'ABCDEFGHIJKL'
      })
    })

  }
}
