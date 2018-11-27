import { Component } from "@angular/core";
import ReviewQuizSessionUseCase from "type-review-core/src/usecases/ReviewQuizUseCase.js";
import JsonQuestionGateway from "type-review-core/src/gateways/JsonQuestionGateway.js";

@Component({
  selector: "app-review-quiz",
  templateUrl: "./reviewQuiz.component.html",
  styleUrls: ["./reviewQuiz.component.scss"]
})
export class ReviewQuizComponent {
  usecase: any;
  quizData: any = {};

  constructor() {
    const gateway = new JsonQuestionGateway();
    this.usecase = new ReviewQuizSessionUseCase(gateway);
    this.quizData = this.usecase.viewModel();
  }

  onGuessChange(context) {
    this.usecase.answerQuestion(context.id, context.answer);
  }

  validate() {
    this.usecase.checkAnswers();
  }

  resetQuiz() {
    this.usecase.reset();
  }

  toggleAnswers() {
    this.usecase.toggleAnswers();
  }

  get questions() {
    return this.quizData.questions.map(question => {
      return {
        key: question.id,
        id: question.id,
        imageUrl: question.imageUrl,
        guess: question.answer,
        correctAnswer: question.correctAnswer,
        correct: question.isCorrect,
        submitted: this.quizData.submitted,
        showAnswers: this.quizData.showAnswers
      };
    });
  }
}
