import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url = environment.apiUrl;

  constructor(
    private http: HttpClient,
    
  ) { }

  createCourse(item: any): any {
    var body = JSON.stringify(item);
    return this.http.post<any>(`${this.url}/course`, body, httpOptions );
  }

  updateCourse(item: any): any {
    var body = JSON.stringify(item);
    return this.http.put<any>(`${this.url}/course`, body, httpOptions );
  }

  deleteCourse(id: number): any {
    return this.http.delete<any>(`${this.url}/course/${id}`);
  }
  getCourse(id: number): any {
    return this.http.get<any>(`${this.url}/course/${id}`);
  }

  getAllCourses(): any {
    return this.http.get<any>(`${this.url}/courses`);
  }

}
