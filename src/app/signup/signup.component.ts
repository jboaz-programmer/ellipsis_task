import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  response:any

  constructor(private router: Router, private service: ServiceService){}
  postData = {  
    email:"",
    password: "",
    name:"",
    sex :"",
    mobile:"",
 }
 saveData(){
  console.log(this.postData);
  this.service.addUser(this.postData).subscribe(
    res=>{
      this.response = res;
      Swal.fire({
        // title: 'success',
        text: this.response.message,
        icon: 'success'
      });
    this.router.navigate(['login']);
     }
  )
}
login(){
  this.router.navigate(['login'])
}
}
