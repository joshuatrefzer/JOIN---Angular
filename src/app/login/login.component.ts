import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormsModule, FormGroup } from '@angular/forms';
import { User, UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // passwordFormControl = new FormControl('', [Validators.required]);
  // firstnameFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  // lastnameFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);

  isChecked: boolean = false;

  user: User = {} as User;
  guestUser = {
    'username': 'GuestAccount',
    'email': 'guestaccount@example.com',
    'password': 'Guest'
  }
  error:boolean = false;

  public loginForm: FormGroup = new FormGroup({

    username: new FormControl('', [
      Validators.required,
    ], []),

    password: new FormControl('', [
      Validators.required
    ], []),

    isChecked: new FormControl('')

  });


  constructor(
    private _formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    public authService: AuthenticationService,

  ) {
  }


  onSubmit(type:string) {
    this.login(type);
  }

  redirectToPWReset() {
    this.authService.forgotPassword = true;
    this.authService.showLogin = false;
    this.authService.showSignUp = false;
  }

  loginAsGuest() {
    this.authService.userIsLoggedIn = true;
    this.redirectToApp();
  }


  login(type:string) {
    debugger
    let json;
    if (this.loginForm.valid && type == 'login') {
      json = this.loginForm.value;
    } else if(type == 'guest') {
      json = this.guestUser;
    } else {
      this.loginError();
    }

      this.authService.login(json).subscribe(
        (response: any) => {
          const token = response.token;
          localStorage.setItem('Token', token);
          this.userService.currentUser = response.user;
          console.log(this.userService.currentUser);
          this.authService.userIsLoggedIn = true;
          this.redirectToApp();
        },
        error => {
          console.error(error);
        }
      );
    
  }

  redirectToApp() {
    this.router.navigate(['/summary']);
  }

  loginError(){
    this.error = true;
    setTimeout(() => {
      this.error = false;
    }, 2000);
  }



}
