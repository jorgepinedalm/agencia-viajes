import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn:boolean;

  constructor(private http : HttpClient) {
    this.isLoggedIn = false;
  }

  public isUserLoggedIn():boolean{
    return this.isLoggedIn;
  }

  public isAuthenticated() : boolean {
    let userData = localStorage.getItem('userInfo')
    if(userData && JSON.parse(userData)){
      return true;
    }
    return false;
  }

  public setUserInfo(user:any){
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  public validate(user:string, password:string) {
    if(user == "admin" && password == "admin"){
      this.isLoggedIn = true;
      return Promise.resolve({user: {email: user, idUser: 1}});
    }else{
      return Promise.reject();
    }
    
    //return this.http.post(`${environment.API}/authenticate`, {'username' : email, 'password' : password}).toPromise()
  }
}
