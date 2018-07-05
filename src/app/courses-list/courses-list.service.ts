import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course';
import { environment } from '../../environments/environment';

@Injectable()
export class CoursesListService {

    private apiUrl = environment.api_endpoint;

    constructor(private http:HttpClient) {}

    public getAllCourses():Observable<Course[]> {
      return this.http
        .get<Course[]>(this.apiUrl + '/courses');
    }
}
