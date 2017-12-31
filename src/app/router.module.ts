import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
//components
import { LoginComponent } from './Authcomponents/login/login.component';
import { SignupComponent } from './Authcomponents/signup/signup.component';
import { PasswordComponent } from './Authcomponents/password/password.component';
//Authservice
import { 
    AuthGuardService as AuthGuard 
  } from './AuthService/auth-guard.service';
  //authcomponents
import { ProfileComponent } from './Appcomponents/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'password', component: PasswordComponent },
  { 
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard] 
  }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
 
})
export class AppRoutingModule {}

export const routingComponents =[LoginComponent,SignupComponent,PasswordComponent,ProfileComponent]