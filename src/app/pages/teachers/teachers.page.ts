import { Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Activity } from "src/app/models/activity.model";
import { PaginatedTeachers, Teacher } from "src/app/models/teacher.model";
import { ApiService } from "src/app/services/api.service";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({
    selector: 'app-teachers',
    templateUrl: 'teachers.page.html',
    styleUrls: ['teachers.page.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class TeachersPage {

    teachers: PaginatedTeachers;
    currentPage: number;
    filter?: Activity;
    isAuthenticated: Observable<boolean>;

    constructor(
        private apiService: ApiService,
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    ionViewWillEnter() {

        this.isAuthenticated = this.authenticationService.isAuthenticated();
        this.loadTeachers();
    }

    viewTeacher(teacher: Teacher) {
        this.router.navigate(['/teacher/view', teacher.id]);
    }

    editTeacher(teacher: Teacher) {
        this.router.navigate(['/teacher/edit', teacher.id]);
    }

    deleteTeacher(teacher: Teacher) {
        this.apiService.delete(`api/teachers/${teacher.id}`).subscribe(() => {
            this.loadTeachers();
        });
    }

    public loadTeachers(page: number = 1) {

        if (this.filter && this.filter.id) {
            return this.loadTeachersForAnActivity(this.filter, page);
        }
        this.apiService
            .get('api/teachers', { 'page': page })
            .subscribe((response: PaginatedTeachers) => {
                this.teachers = response;
                this.currentPage = page;
                console.log(this.teachers);
            });
    }

    public loadTeachersForAnActivity(activity: Activity, page: number = 1) {

        this.apiService
            .get('api/teachers/filter/' + activity.id, { 'page': page })
            .subscribe((response: PaginatedTeachers) => {
                this.teachers = response;
                this.currentPage = page;
                this.filter = activity;
                console.log(this.teachers);
            })
    }

    public removeFilter() {
        this.filter = null;
        this.loadTeachers();
    }
}