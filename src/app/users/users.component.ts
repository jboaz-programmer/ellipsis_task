import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { DeleteuserComponent } from '../deleteuser/deleteuser.component';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
users: any
private readonly TOKEN_NAME = 'jimmy_token';
userData: any
userDatas: any
  constructor (public dialog: MatDialog,private service: ServiceService, private router: Router){
    
  }
  ngOnInit() {
    this.userDatas = localStorage.getItem(this.TOKEN_NAME);
    this.userData = (JSON.parse(this.userDatas))
   
    this.getUser();
    
  }

  getUser(){
    this.service.getUsers().subscribe(
      res=>{
        this.users = res;
        console.log(this.users);
      }
    )
  }
  addUser(){
    this.router.navigate(['addusers']);
  }
  edit(data:any){
    let navigationExtras: NavigationExtras ={
      state:{ 
        userID : data
      }
    }
    this.router.navigate(['edituser'], navigationExtras)
  }
  openDialog(id:any,enterAnimationDuration: string, exitAnimationDuration: string): void {
   
    this.dialog.open(DeleteuserComponent, {
      data: id,
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
