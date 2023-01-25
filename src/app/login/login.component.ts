import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  response: any
  private readonly TOKEN_NAME = 'jimmy_token';

  constructor(private router: Router, private service: ServiceService) {
  }

  postData = {
    email: "",
    password: ""
  }

  loginFunc(){
    
  }

  login() {
     this.service.login(this.postData).subscribe(
      res=>{
        this.response = res;

          
        if(this.response.status == true){
          
          localStorage.setItem(this.TOKEN_NAME, JSON.stringify(this.response.data))

          Swal.fire({
            // title: 'success',
            text: this.response.message,
            icon: 'success',
            timer: 2000
          })
          let navigationExtras : NavigationExtras = {
            state: {
              loginInfo : this.response.data
            }
          }
          this.router.navigate(['homepage'], navigationExtras)
        }
      },
      error=>{
        Swal.fire({
          // title: 'success',
          text: 'incorect',
          icon: 'error',
          timer: 2000
        })
      }
    ) 
  
  
  }
  signup() {
    this.router.navigate(['signup']);
  }
}
