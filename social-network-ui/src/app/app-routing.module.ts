import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';
import { AddpostComponent } from './home/addpost/addpost.component';
import { UserinfoComponent} from './home/userinfo/userinfo.component';
import { AuthGuard } from './guards/auth-guard.service';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'signin',component:SigninComponent},
{path:'signup',component:SignupComponent},
{path:'addpost',component:AddpostComponent},
{path:'userinfo',component:UserinfoComponent},
{path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { canActivate: [AuthGuard] }
