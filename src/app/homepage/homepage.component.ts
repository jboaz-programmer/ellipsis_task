import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  panelOpenState = false;

  books: any;

  filterTerm: any
  cp: string | number | undefined;
  postData: any;
  response: any;
  userData: any
  constructor(private service: ServiceService, private router: Router) {

  }

  ngOnInit(): void {
    this.userData= history.state.loginInfo;
    console.log(this.userData,"nini")

    this.getBooks()
  }
  getBooks() {
    this.service.getBook().subscribe(
      res => {
        this.books = res;
        console.log(this.books)
      }
    )
  }
  // getBook(){

  // }
  open(data: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        bookId: data
      }
    }
    this.router.navigate(['bookdetails'], navigationExtras)
  }
  likes: any
  like_btn(data: any) {
      this.likes = data.like_count + 1;
      console.log(this.likes,"like count")
    let params = {
    author: data.author,
    book_name :data.book_name,
    book_status:data.book_status,
    book_title:data.book_title,
    book_type:data.book_type,
     favorite:data.favorite,
     like_count: this.likes
    
    
  }
  console.log(params,"added like")


    this.service.editBook(data.id, params).subscribe(
      res => {
        this.response = res;
        console.log(this.response)

      }

    )
  }
}
