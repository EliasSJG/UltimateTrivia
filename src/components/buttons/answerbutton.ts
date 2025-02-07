import { openModal } from "../../pages/choice/choice";
import { increaseMoney, totalPricePot } from "../../state/state";
import { getSelectedQuestion } from "../dropdown/dropdown";
import { updatePriceDisplay } from "../progressbar/progressbar";
import "./_answerbutton.scss";

//The answer buttons in question page
export const answerButton = (
  continueToChoiceButton: HTMLButtonElement,
  continueToStartButton: HTMLButtonElement
) => {
  const answerDiv = document.createElement("div");
  answerDiv.classList.add("answer-div");

  //getting user selected question
  const selectedQuestion = getSelectedQuestion();
  console.log(selectedQuestion.correctAnswer);
  const answers = [
    ...selectedQuestion.incorrectAnswers,
    selectedQuestion.correctAnswer,
  ];
  //randomizing position
  answers.sort(() => Math.random() - 0.5);
  //creating a button for each answer
  answers.forEach((answer) => {
    const answerButton = document.createElement("button");
    answerButton.classList.add("answerbutton");
    answerButton.textContent = answer;

    answerButton.addEventListener("click", () => {
      document.querySelectorAll(".answerbutton").forEach((button) => {
        (button as HTMLButtonElement).disabled = true;
      });

      document.querySelectorAll(".helpline").forEach((helplineButton) => {
        (helplineButton as HTMLButtonElement).disabled = true;
      });
      //checking if user has correct or false
      if (answer === selectedQuestion.correctAnswer) {
        //depending on difficulty increase the money by that difficulty amount
        increaseMoney(
          selectedQuestion.difficulty as "easy" | "medium" | "hard"
        );
        updatePriceDisplay();
        continueToChoiceButton.style.display = "block";
        answerButton.style.backgroundColor = "#3AF246";
        openModal.style.display = "block";
      } else {
        updatePriceDisplay();
        continueToStartButton.style.display = "block";
        answerButton.style.backgroundColor = "#F54E4E";
        totalPricePot.totalPrice = 0;

        openModal.style.display = "none";
      }
    });
    answerDiv.appendChild(answerButton);
  });
  return answerDiv;
};
