import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit{
  userId: any
  postData: any;
  response: any;
  constructor(private service: ServiceService, private router: Router){}
  
  ngOnInit(): void {
    this.userId= history.state.userID;
    this.getBook()
      }

      getBook(){
        this.service.getBookById(this.userId).subscribe(
          res=>{
            this.postData = res;
            console.log(this.postData);
          }
        )
      }
      saveData(){
        this.service.editBook(this.userId, this.postData).subscribe(
          res=>{
            this.response =res;
            console.log(this.response)
            Swal.fire({
              // title: 'success',
              text: 'updated',
              icon: 'success'
            })
          this.router.navigate(['books']);
           }
          
        )
      }
}



