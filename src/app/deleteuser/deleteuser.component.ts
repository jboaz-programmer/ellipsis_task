 import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ServiceService } from '../services/service.service';
export interface userData{
  id: string
}
@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent {
  result: any
  constructor(@Inject(MAT_DIALOG_DATA) public data: userData, private service: ServiceService){}

  deleteuser(){
  this.service.deleteUser(this.data).subscribe(
    res=>{
      this.result = res;
      console.log(this.result)
      if (this.result.success == true){
        Swal.fire({
          // title: 'success',
          text: "user deleted",
          icon: 'success'
        })
        }
      }
    
  )
 }
  
}
