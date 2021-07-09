import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Observable } from "rxjs";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({
    selector: 'app-side-menu',
    templateUrl: 'side.menu.component.html',
  })
export class SideMenuComponent implements OnInit {

    isAuthenticated: Observable<boolean>;

    constructor(
        private navController: NavController, 
        private authenticationService: AuthenticationService
    ) {}

    ngOnInit() {
        this.isAuthenticated = this.authenticationService.isAuthenticated();
    }

    logOut() {
        this.authenticationService.removeToken();
        window.location.href = '/';
    }
}