import { Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationResponse } from "src/app/models/authentication.model";
import { Login } from "src/app/models/login.model";
import { ApiService } from "src/app/services/api.service";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({
    selector: 'app-login',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss'],
    encapsulation: ViewEncapsulation.None,
  })
export class LoginPage {
    
    loginData = new Login();

    constructor(
        private router: Router,
        private apiService: ApiService,
        private authenticationService: AuthenticationService
    ) {}

    login() {
        this.apiService
            .post('api/authentication/login', this.loginData)
            .subscribe((response: AuthenticationResponse) => {
                this.authenticationService.saveToken(response.token);
                window.location.href = '/';
            });
    }
}