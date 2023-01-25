import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BooksComponent } from './books/books.component';
import { EditbookComponent } from './editbook/editbook.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatFormFieldModule,} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { AddusersComponent } from './addusers/addusers.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { SignupComponent } from './signup/signup.component';
import {NgxPaginationModule} from 'ngx-pagination'
import {MatExpansionModule} from '@angular/material/expansion';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegistrationComponent,
    BooksComponent,
    EditbookComponent,
    EdituserComponent,
    UsersComponent,
    AddbooksComponent,
    AddusersComponent,
    DeleteuserComponent,
    DeletebookComponent,
    SignupComponent,
    BookdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
     ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule, 
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    NgxPaginationModule,
    MatExpansionModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
