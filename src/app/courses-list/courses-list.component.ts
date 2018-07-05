import { Component, OnInit } from '@angular/core';
import { CoursesListService } from './courses-list.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  providers: [CoursesListService]
})
export class CoursesListComponent implements OnInit {

  courses: any = [];
  private apiUrl = "s";

  constructor( private coursesListService: CoursesListService) {
  }

  ngOnInit() {
    this.coursesListService
      .getAllCourses()
      .subscribe(
        (courses) => {
          this.courses = courses;
        }
      );
  }

}
