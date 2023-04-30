import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private $isLoggedIn:BehaviorSubject<boolean>;

  constructor(private http : HttpClient) {
    this.$isLoggedIn = new BehaviorSubject<boolean>(false);
  }

  public isUserLoggedIn():Observable<boolean>{
    return this.$isLoggedIn.asObservable();
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
      this.$isLoggedIn.next(true);
      return Promise.resolve({user: {email: user, idUser: 1}});
    }else{
      return Promise.reject();
    }
    
    //return this.http.post(`${environment.API}/authenticate`, {'username' : email, 'password' : password}).toPromise()
  }

  public logout():Observable<boolean>{
    this.$isLoggedIn.next(false);
    return of(true);
  }
}
