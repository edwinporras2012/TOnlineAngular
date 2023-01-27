import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/Iuser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) { }

  createUser(userBody:any):Observable<User>{
    const baseUrl= environment.API_BACKEND_USER;
    return this.httpclient.post<User>(baseUrl, userBody);
  }

  obtenerUsernames(): Observable<string[]>{
    const baseUrl= environment.API_BACKEND_USER;
    return this.httpclient.get<string[]>(baseUrl);
  }

  obtenerUserUnico(userEmail:any){
    const baseUrl= environment.API_BACKEND_USER + '/userEmail';
    return this.httpclient.get<User>(baseUrl, userEmail)
  }
}
