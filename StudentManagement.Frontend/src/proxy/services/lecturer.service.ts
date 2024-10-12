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
export class LecturerService {

  url = environment.apiUrl;

  constructor(
    private http: HttpClient,
    
  ) { }

  createLecturer(item: any): any {
    var body = JSON.stringify(item);
    return this.http.post<any>(`${this.url}/lecturer`, body, httpOptions );
  }

  updateLecturer(item: any): any {
    var body = JSON.stringify(item);
    return this.http.put<any>(`${this.url}/lecturer`, body, httpOptions );
  }

  deleteLecturer(id: number): any {
    return this.http.delete<any>(`${this.url}/lecturer/${id}`);
  }
  getLecturer(id: number): any {
    return this.http.get<any>(`${this.url}/lecturer/${id}`);
  }

  getAllLecturers(): any {
    return this.http.get<any>(`${this.url}/lecturers`);
  }

}
