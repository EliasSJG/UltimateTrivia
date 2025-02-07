import { answerButton } from "../../components/buttons/answerbutton";
import {
  renderChoiceButton,
  renderStartButton,
} from "../../components/buttons/continuebutton";
import {
  askAudienceHelpline,
  askFriendHelpline,
  fiftyFiftyHelpline,
  switchQuestionHelpline,
} from "../../components/buttons/helpbutton";
import { getSelectedQuestion } from "../../components/dropdown/dropdown";

import "./_question.scss";

export const renderQuestionPage = () => {
  const choice = document.querySelector("#choice") as HTMLDivElement;
  const start = document.querySelector("#start") as HTMLDivElement;
  const question = document.createElement("div") as HTMLDivElement;
  const priceDivDelete = document.querySelector(".price-div") as HTMLDivElement;

  const continueToChoiceButton = renderChoiceButton(question, choice);
  continueToChoiceButton.style.display = "none";
  const continueToStartButton = renderStartButton(
    choice,
    question,
    start,
    priceDivDelete
  );
  continueToStartButton.style.display = "none";

  const gameContainer = document.createElement("div");
  gameContainer.classList.add("game-container");

  const selectedQuestion = getSelectedQuestion();

  choice.style.display = "none";

  const heading = document.createElement("h1") as HTMLHeadingElement;
  heading.classList.add("main-title");
  heading.textContent = "Question";
  heading.id = "question-title";
  heading.textContent = `${selectedQuestion.question}`;

  question.id = "question";
  question.classList.add("question");

  const helplineDiv = document.createElement("div");
  helplineDiv.classList.add("helpline-div");
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
};
