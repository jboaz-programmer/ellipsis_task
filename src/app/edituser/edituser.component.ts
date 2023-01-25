import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent {
  users:any
  postData: any
  userId: any
constructor(private service: ServiceService, private router: Router){}
  ngOnInit(): void {
    this.userId= history.state.userID;
    this.getUser()
     }

  getUser(){
    this.service.getUsersById(this.userId).subscribe(
      res=>{
        this.postData = res;
        console.log(this.postData);
      }
    )
  }
response: any
  update(){
    this.service.editUser(this.userId, this.postData).subscribe(
      res=>{
        this.response =res;
        console.log(this.response)
        Swal.fire({
          // title: 'success',
          text: 'updated',
          icon: 'success'
        })
      this.router.navigate(['users']);
       }
      
    )
  }
}
