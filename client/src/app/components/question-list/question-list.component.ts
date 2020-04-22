import { Component, OnInit } from '@angular/core';

import { Question } from '../../models/question';
import { QuestionService } from '../../services/question/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  quests: Question[];

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

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.getPHPQuestion();
  }

  getPHPQuestion(): void {
    this.questionService.getPHPQuestion().subscribe(questions => this.quests = questions);
  }

  addQuestion(): void {
    this.questionService.postPHPQuestion(this.newQuestion).subscribe(newQuestion => {
      console.log(newQuestion)
    });
  }

  deletePHPQuestion(question: Question): void {
    this.quests = this.quests.filter(h => h !== question);
    this.questionService.deleteQuestion(question).subscribe(quests => console.log(quests));
  }

}
