import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form:FormGroup;

  constructor(private fb:FormBuilder, 
               private authService: AuthService, 
               private router: Router) {

      this.form = this.fb.group({
          user: ['',Validators.required],
          password: ['',Validators.required]
      });
  }

  login(){
    const val = this.form.value;
    this.authService.validate(val.user, val.password)
    .then((response:any) => {
      this.authService.setUserInfo({'user' : response['user']});
      this.router.navigate(['auth/home']);

    })
  }
}
