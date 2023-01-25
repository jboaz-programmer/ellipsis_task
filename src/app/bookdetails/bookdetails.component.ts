import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit{
  userId: any
  postDatas: any
 constructor(private service: ServiceService){

 }
 postData = {
  comment:""
 }
 ngOnInit(): void {
  this.userId= history.state.bookId;
  console.log(this.userId)
  this.getBook()
 }
 getBook(){
  this.service.getBookById(this.userId).subscribe(
    res=>{
      this.postDatas = res;
      console.log(this.postData);
    }
  )
}
comment(){

}
}
