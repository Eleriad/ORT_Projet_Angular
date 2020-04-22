import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Question } from '../../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) {
  }

  /** Version Node */
  private urlNode = 'http://localhost:3000';

  getQuestion(): Observable<Question[]> {
    return this.http.get<Question[]>(this.urlNode + "/quizz");
  }

  addQuestion(newQuestion: Question): Observable<Question> {
    return this.http.post<Question>(this.urlNode + "/quizz", newQuestion);
  }

  deleteQuestion(deletedQuestion: Question): Observable<Question> {
    return this.http.delete<Question>(this.urlNode + "/quizz/" + deletedQuestion.id);
  }

  /** Version PHP */
  private urlPHP = 'http://localhost:81/Angular_Quizz/api-php';

  getPHPQuestion(): Observable<Question[]> {
    return this.http.get<Question[]>(this.urlPHP + "/quizz.php");
  }

  postPHPQuestion(newQuestion: Question): Observable<Question> {
    const formData = new FormData();
    formData.append('theme', newQuestion.theme);
    formData.append('question', newQuestion.question);
    formData.append('prop1', newQuestion.prop1);
    formData.append('prop2', newQuestion.prop2);
    formData.append('prop3', newQuestion.prop3);
    formData.append('prop4', newQuestion.prop4);
    formData.append('difficulte', newQuestion.difficulte);
    formData.append('anecdote', newQuestion.anecdote);
    return this.http.post<Question>(this.urlPHP + "/quizz_insert.php", formData)
  }

}
