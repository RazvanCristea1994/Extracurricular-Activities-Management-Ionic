import { Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { PaginatedActivities } from "src/app/models/activity.model";
import { ApiService } from "src/app/services/api.service";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({
    selector: 'app-activities',
    templateUrl: 'activities.page.html',
    styleUrls: ['activities.page.scss'],
    encapsulation: ViewEncapsulation.None,
  })
export class ActivitiesPage {
    activities: PaginatedActivities;
    currentPage: number;
    isAuthenticated: Observable<boolean>;

    constructor(
        private apiService: ApiService,
        private router: Router,
        private authenticationService: AuthenticationService
    ){}

    ionViewWillEnter() {
        this.isAuthenticated = this.authenticationService.isAuthenticated();
        this.loadActivities();
    }

    loadActivities(){}
    
}