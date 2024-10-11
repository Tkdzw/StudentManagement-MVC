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

  getStudent(id: number): any {
    return this.http.get<any>(`${this.url}/students/${id}`);
  }

  getAllStudents(): any {
    return this.http.get<any>(`${this.url}/students`);
  }

}
