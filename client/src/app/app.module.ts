import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
// import { QuestionAddComponent } from './components/question-add/question-add.component';
import { QuestionEditComponent } from './components/question-edit/question-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    // QuestionAddComponent,
    QuestionEditComponent,
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
