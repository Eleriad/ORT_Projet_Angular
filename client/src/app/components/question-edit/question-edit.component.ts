import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Question } from '../../models/question';
import { QuestionService } from '../../services/question/question.service';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {

  newQuestion: Question = {
    id: null,
    theme: null,
    question: null,
    prop1: null,
    prop2: null,
    prop3: null,
    prop4: null,
    difficulte: null,
    anecdote: null
  };

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private location: Location) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.questionService.getQuestion(id).subscribe(newQuestion => {
      this.newQuestion = newQuestion;
      console.log(newQuestion);
    });

  }

  editQuestion() {
    this.questionService.updateQuestion(this.newQuestion).subscribe(newQuestion => {
      console.log(newQuestion)
    });
    this.location.back();
  }

  goBack(): void {
    this.location.back();
  }

}
