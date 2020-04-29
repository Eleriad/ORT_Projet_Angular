import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionListComponent } from './components/question-list/question-list.component'
import { QuestionAddComponent } from './components/question-add/question-add.component'
import { QuestionEditComponent } from './components/question-edit/question-edit.component'

const routes: Routes = [
  { path: '', redirectTo: '/question-list', pathMatch: "full" },
  { path: 'question-list', component: QuestionListComponent },
  { path: 'question-add', component: QuestionAddComponent },
  { path: 'question-edit/:id', component: QuestionEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
