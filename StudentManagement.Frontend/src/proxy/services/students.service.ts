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
export class StudentsService {

  url = environment.apiUrl;

  constructor(
    private http: HttpClient,
    
  ) { }

  createStudent(item: any): any {
    var body = JSON.stringify(item);
    return this.http.post<any>(`${this.url}/student`, body, httpOptions );
  }

  updateStudent(item: any): any {
    var body = JSON.stringify(item);
    return this.http.put<any>(`${this.url}/student`, body, httpOptions );
  }

  deleteStudent(id: number): any {
    return this.http.delete<any>(`${this.url}/student/${id}`);
  }
  getStudent(id: number): any {
    return this.http.get<any>(`${this.url}/student/${id}`);
  }

  getAllStudents(): any {
    return this.http.get<any>(`${this.url}/students`);
  }

}
