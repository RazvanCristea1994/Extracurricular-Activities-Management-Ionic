import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.componenet';
import { LoginPage } from './pages/login/login.page';
import { AuthenticationService } from './services/authentication.service';
import { ApiService } from './services/api.service';
import { TokenInterceptor } from './interceptors/authentication.token.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SideMenuComponent } from './components/side.menu/side.menu.component';
import { TeachersPage } from './pages/teachers/teachers.page';

@NgModule({
  declarations: [
    //Components
    AppComponent,
    NavbarComponent,
    SideMenuComponent,
    //Pages
    LoginPage,
    TeachersPage,
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ApiService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
