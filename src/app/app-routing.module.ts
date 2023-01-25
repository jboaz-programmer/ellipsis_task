import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { AddusersComponent } from './addusers/addusers.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { BooksComponent } from './books/books.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { EditbookComponent } from './editbook/editbook.component';
import { EdituserComponent } from './edituser/edituser.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'homepage', component: HomepageComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'books', component: BooksComponent},
  {path:'users', component: UsersComponent},
  {path:'addbooks', component: AddbooksComponent},
  {path:'addusers', component: AddusersComponent},
  {path:'edituser', component: EdituserComponent},
  {path:'deleteuser', component: DeleteuserComponent},
  {path:'editbook', component: EditbookComponent},
  {path:'deletebook', component: DeletebookComponent},
  {path:'signup', component: SignupComponent},
  {path:'bookdetails', component: BookdetailsComponent}











];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
