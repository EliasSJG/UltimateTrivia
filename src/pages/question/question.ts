import { answerButton } from "../../components/buttons/answerbutton";
import {
  renderChoiceButton,
  renderStartButton,
} from "../../components/buttons/continuebutton";
import {
  askAudienceHelpline,
  askFriendHelpline,
  fiftyFiftyHelpline,
  resetHelplines,
  switchQuestionHelpline,
} from "../../components/buttons/helpbutton";
import { getSelectedQuestion } from "../../components/dropdown/dropdown";

import { renderChoicePage } from "../choice/choice";
import "./_question.scss";

export const renderQuestionPage = () => {
  const start = document.querySelector("#start") as HTMLDivElement;
  const continueToChoiceButton = renderChoiceButton();
  continueToChoiceButton.style.display = "none";
  const continueToStartButton = renderStartButton();
  continueToStartButton.style.display = "none";
  const gameContainer = document.createElement("div");
  gameContainer.classList.add("game-container");

  const choice = document.querySelector("#choice") as HTMLDivElement;
  const selectedQuestion = getSelectedQuestion();

  choice.style.display = "none";
  const heading = document.createElement("h1") as HTMLHeadingElement;
  const question = document.createElement("div") as HTMLDivElement;

  heading.classList.add("main-title");
  heading.innerHTML = "Question";
  heading.id = "question-title";

  question.id = "question";
  question.classList.add("question");

  const helplineDiv = document.createElement("div");
  helplineDiv.classList.add("helpline-div");

  heading.innerHTML = `${selectedQuestion.question}`;

  const helplineAnswerDiv = document.createElement("div");
  helplineAnswerDiv.classList.add("helpline-answer-div");

  const answerDiv = answerButton(continueToChoiceButton, continueToStartButton);
  helplineDiv.append(
    askFriendHelpline(helplineAnswerDiv),
    fiftyFiftyHelpline(helplineAnswerDiv),
    switchQuestionHelpline(question, choice),
    askAudienceHelpline(helplineAnswerDiv)
  );

  gameContainer.append(helplineDiv, answerDiv);

  question.append(
    helplineAnswerDiv,
    heading,
    gameContainer,
    continueToChoiceButton,
    continueToStartButton
  );

  document.body.appendChild(question);
  continueToChoiceButton.addEventListener("click", () => {
    question.style.display = "none";

    choice.remove();
    renderChoicePage();
  });
  const priceDivDelete = document.querySelector(".price-div") as HTMLDivElement;
  continueToStartButton.addEventListener("click", () => {
    resetHelplines();
    choice.remove();
    question.remove();
    start.style.display = "flex";
    priceDivDelete.remove();
  });
};
