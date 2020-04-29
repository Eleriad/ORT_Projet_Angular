import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Question } from '../../models/question';
import { QuestionService } from '../../services/question/question.service';

@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.css']
})
export class QuestionAddComponent implements OnInit {

  newQuestion: Question = {
    id: null,
    theme: '',
    question: '',
    prop1: '',
    prop2: '',
    prop3: '',
    prop4: '',
    difficulte: '',
    anecdote: ''
  };

  constructor(private questionService: QuestionService, private location: Location) { }

  ngOnInit(): void {
  }

  addQuestion(): void {
    this.questionService.postPHPQuestion(this.newQuestion).subscribe(newQuestion => {
      console.log(newQuestion)
    });
    this.location.back();
  }

  goBack(): void {
    this.location.back();
  }

}
