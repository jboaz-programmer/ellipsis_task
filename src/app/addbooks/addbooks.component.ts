import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent {
constructor(private service: ServiceService, private router: Router){

}
postData = {
  book_title:"",
  book_type:"",
  author:"",
  book_name:"BKN",
  book_status:"available"

}
response: any
saveData(){
  this.service.addBook(this.postData).subscribe(
    res=>{
      this.response = res;
       Swal.fire({
          // title: 'success',
          text: "Book added",
          icon: 'success'
        })
      this.router.navigate(['books'])
    }
  )
}
}
