import { renderChoiceButton } from "../../components/buttons/continuebutton";
import {
  askAudienceHelpline,
  askFriendHelpline,
  fiftyFiftyHelpline,
  switchQuestionHelpline,
} from "../../components/buttons/helpbutton";
import {
  getSelectedQuestion,
  loadDropdowns,
} from "../../components/dropdown/dropdown";
import "./_question.scss";

export const renderQuestionPage = () => {
  const continueToChoiceButton = renderChoiceButton();
  continueToChoiceButton.style.display = "none";

  const answerDiv = document.createElement("div");
  const choice = document.querySelector("#choice") as HTMLDivElement;
  const selectedQuestion = getSelectedQuestion();

  choice.style.display = "none";
  const heading = document.createElement("h1") as HTMLHeadingElement;
  const question = document.createElement("div") as HTMLDivElement;

  heading.classList.add("main-title");
  heading.innerHTML = "Question"; //change to api question
  heading.id = "question-title";

  question.id = "question";
  question.classList.add("question");

  const askAudienceButton = askAudienceHelpline();
  const askFriendButton = askFriendHelpline();
  const fiftyFiftyButton = fiftyFiftyHelpline();
  const SwitchQuestionButton = switchQuestionHelpline();
  const helplineDiv = document.createElement("div");
  helplineDiv.classList.add("helpline-div");
  //foreach incorrect answer and correct answer create a button

  heading.innerHTML = `${selectedQuestion.question}`;
  console.log(selectedQuestion.correctAnswer);
  const answers = [
    ...selectedQuestion.incorrectAnswers,
    selectedQuestion.correctAnswer,
  ];
  answers.sort(() => Math.random() - 0.5);
  console.log(answers);

  answers.forEach((answer) => {
    const answerButton = document.createElement("button");
    answerButton.classList.add("answerbutton");
    answerButton.textContent = `${answer}`;

    answerButton.addEventListener("click", () => {
      if (answer === selectedQuestion.correctAnswer) {
        continueToChoiceButton.style.display = "block";
        answerButton.style.backgroundColor = "#3AF246";
      } else {
        alert("wrong");
      }
    });
    answerDiv.appendChild(answerButton);
  });

  helplineDiv.append(
    askFriendButton,
    fiftyFiftyButton,
    SwitchQuestionButton,
    askAudienceButton
  );

  answerDiv.classList.add("answer-div");
  question.append(heading, helplineDiv, answerDiv, continueToChoiceButton);
  document.body.appendChild(question);
  continueToChoiceButton.addEventListener("click", () => {
    question.remove();
    choice.style.display = "flex";
    loadDropdowns();
  });
};
