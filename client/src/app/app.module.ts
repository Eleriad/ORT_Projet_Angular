import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionEditComponent } from './components/question-edit/question-edit.component';
import { QuestionAddComponent } from './components/question-add/question-add.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionEditComponent,
    QuestionAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
