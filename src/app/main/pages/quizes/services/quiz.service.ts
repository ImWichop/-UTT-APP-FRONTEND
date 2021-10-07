import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  onGetQuizesByArea(): Observable<any>{
    return this.http.get<any>(`${environment.API_URL}/api/v1/quizzes/by/area`);
  }

  onGetQuizes(): Observable<any>{
    return this.http.get<any>(`${environment.API_URL}/api/v1/quizzes`);
  }
}
