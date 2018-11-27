import { Component } from "@angular/core";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.scss"]
})
export class QuestionComponent {
  submitted = false;
  imageUrl = "image.jpg";

  onGuessChange() {
    console.log("changed");
  }
}
