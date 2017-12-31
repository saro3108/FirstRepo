import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http'

//AuthComponents
import { AppComponent } from './app.component';

//rotermodule & rouytingcomponent
import { AppRoutingModule,routingComponents }     from './router.module';

//jwt-token
import {JwtModule, JwtHelperService } from '@auth0/angular-jwt';

//auth-service
import { AuthGuardService } from './AuthService/auth-guard.service';
import { AuthService } from './AuthService/auth.service';
import { LoginService } from './AuthService/login.service';
import { SignupService } from './AuthService/signup.service';

//appservice

//jwt-config
export const Config={ config: {
  tokenGetter: () => {
    return localStorage.getItem('token');
  },skipWhenExpired: true}}
@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    JwtModule.forRoot(Config)
  ],
  providers: [
    AuthGuardService,
    AuthService,
    LoginService,
    SignupService,
    JwtHelperService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
