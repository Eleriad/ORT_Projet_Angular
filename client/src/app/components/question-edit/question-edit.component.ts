import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Question } from '../../models/question';
import { QuestionService } from '../../services/question/question.service';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {

  quests: Question[];

  constructor(private route: ActivatedRoute, private questionService: QuestionService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
  }

}
