import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ServiceService } from '../services/service.service';

export interface userData{
  id: string
}
@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent {
  result: any

  constructor(@Inject(MAT_DIALOG_DATA) public data: userData, private service: ServiceService){}


  deletebook(){
    this.service.deleteBook(this.data).subscribe(
      res=>{
        this.result = res;
        console.log(this.result)
        if (this.result.success == true){
          Swal.fire({
            // title: 'success',
            text: "book deleted",
            icon: 'success'
          })
          }
        }
      
    )
   }
}
