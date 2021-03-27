import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/models/user-interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }
  public user: UserInterface={
    email:'',
    password:''
  };
  ngOnInit(): void {
  }
  onLogin(){
    return this.authService.loginuser(this.user.email,this.user.password)
    .subscribe(data =>{
      this.authService.setUser(data.user)
      let token = data.id;
      this.authService.setToken(token);
      this.router.navigate(["/user/profile"]);

    },
    
    );
  }


}
