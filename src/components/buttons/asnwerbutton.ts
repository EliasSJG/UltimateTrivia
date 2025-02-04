import { getSelectedQuestion } from "../dropdown/dropdown";
import "./_answerbutton.scss";

export const answerButton = (
  continueToChoiceButton: HTMLButtonElement,
  continueToStartButton: HTMLButtonElement
) => {
  const answerDiv = document.createElement("div");
  answerDiv.classList.add("answer-div");
  const selectedQuestion = getSelectedQuestion();
  console.log(selectedQuestion.correctAnswer);
  const answers = [
    ...selectedQuestion.incorrectAnswers,
    selectedQuestion.correctAnswer,
  ];
  answers.sort(() => Math.random() - 0.5);

  answers.forEach((answer) => {
    const answerButton = document.createElement("button");
    answerButton.classList.add("answerbutton");
    answerButton.textContent = answer;

    answerButton.addEventListener("click", () => {
      document.querySelectorAll(".answerbutton").forEach((button) => {
        (button as HTMLButtonElement).disabled = true;
      });

      if (answer === selectedQuestion.correctAnswer) {
        continueToChoiceButton.style.display = "block";
        answerButton.style.backgroundColor = "#3AF246";
      } else {
        continueToStartButton.style.display = "block";
        answerButton.style.backgroundColor = "#F54E4E";
      }
    });
    answerDiv.appendChild(answerButton);
  });
  return answerDiv;
};
