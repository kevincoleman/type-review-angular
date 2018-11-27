import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ReviewQuizComponent } from "./components/reviewQuiz/reviewQuiz.component";
import { QuestionComponent } from "./components/question/question.component";

@NgModule({
  declarations: [AppComponent, ReviewQuizComponent, QuestionComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
