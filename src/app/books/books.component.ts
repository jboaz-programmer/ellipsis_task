import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { AddbooksComponent } from '../addbooks/addbooks.component';
import { DeletebookComponent } from '../deletebook/deletebook.component';
import { EditbookComponent } from '../editbook/editbook.component';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
 books: any
 private readonly TOKEN_NAME = 'jimmy_token';
  userData: any
  userDatas: any
  constructor(private router: Router,private service: ServiceService, public dialog: MatDialog){

  }
  ngOnInit(): void {
    this.userDatas = localStorage.getItem(this.TOKEN_NAME);
    this.userData = (JSON.parse(this.userDatas))
    this.getBooks()
  }
  getBooks(){
    this.service.getBook().subscribe(
      res=>{
        this.books = res;
        console.log(this.books)
      }
    )
  }

// openDialog(){
  // const dialogRef = this.dialog.open(AddbooksComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // this.router.navigate(['addbooks'])
  // }
  edit(data:any){
    let navigationExtras: NavigationExtras ={
      state:{ 
        userID : data
      }
    }
    this.router.navigate(['editbook'], navigationExtras)
  }
  openDialog(id:any,enterAnimationDuration: string, exitAnimationDuration: string): void {
   
    this.dialog.open(DeletebookComponent,{
      data: id,
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  addBook(){
    this.router.navigate(['addbooks'])
  }

}
