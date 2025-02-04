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
import { renderChoicePage } from "../choice/choice";
import "./_question.scss";

let helplineUsed = {
  askFriend: false,
  askAudience: false,
  fiftyFifty: false,
  switchQuestion: false,
};

export const renderQuestionPage = () => {
  const start = document.querySelector("#start") as HTMLDivElement;
  const continueToChoiceButton = renderChoiceButton();
  continueToChoiceButton.style.display = "none";
  const continueToStartButton = renderStartButton();
  continueToStartButton.style.display = "none";
  const gameContainer = document.createElement("div");
  gameContainer.classList.add("game-container");

  const answerDiv = document.createElement("div");
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

  const askAudienceButton = askAudienceHelpline();
  const askFriendButton = askFriendHelpline();
  const fiftyFiftyButton = fiftyFiftyHelpline();
  const switchQuestionButton = switchQuestionHelpline();
  const helplineDiv = document.createElement("div");
  helplineDiv.classList.add("helpline-div");

  heading.innerHTML = `${selectedQuestion.question}`;
  console.log(selectedQuestion.correctAnswer);
  const answers = [
    ...selectedQuestion.incorrectAnswers,
    selectedQuestion.correctAnswer,
  ];

  answers.sort(() => Math.random() - 0.5);

  const helplineAnswerDiv = document.createElement("div");
  helplineAnswerDiv.classList.add("helpline-answer-div");

  if (helplineUsed.askFriend) {
    askFriendButton.style.display = "none";
  }
  askFriendButton.addEventListener("click", () => {
    if (helplineUsed.askFriend) return;
    helplineUsed.askFriend = true;
    helplineAnswerDiv.style.display = "block";
    askFriendButton.style.display = "none";

    let friendAnswer: string;
    if (Math.random() < 0.65) {
      friendAnswer = selectedQuestion.correctAnswer;
    } else {
      const friendWrongAnswer = selectedQuestion.incorrectAnswers[0];

      friendAnswer = friendWrongAnswer;
    }
    helplineAnswerDiv.innerHTML = `Friend - "I think that ${friendAnswer} is correct!"`;
  });

  if (helplineUsed.askAudience) {
    askAudienceButton.style.display = "none";
  }
  askAudienceButton.addEventListener("click", () => {
    if (helplineUsed.askAudience) return;
    helplineUsed.askAudience = true;
    helplineAnswerDiv.style.display = "block";
    askAudienceButton.style.display = "none";

    const correctAudienceAnswer = selectedQuestion.correctAnswer;
    const incorrectAudienceAnswer = selectedQuestion.incorrectAnswers;

    const answersPercentages: { [key: string]: number } = {};
    let correctPercentage: number;
    let remainingPercentages = 100;

    if (Math.random() < 0.7) {
      correctPercentage = Math.floor(Math.random() * 21) + 60;
    } else {
      correctPercentage = Math.floor(Math.random() * 31) + 10;
    }

    remainingPercentages -= correctPercentage;
    answersPercentages[correctAudienceAnswer] = correctPercentage;
    incorrectAudienceAnswer.forEach((answer, index) => {
      if (index === incorrectAudienceAnswer.length - 1) {
        answersPercentages[answer] = remainingPercentages;
      } else {
        const percent = Math.floor(Math.random() * remainingPercentages);
        answersPercentages[answer] = percent;
        remainingPercentages -= percent;
      }
    });

    helplineAnswerDiv.innerHTML =
      `Audience Poll: <br>` +
      Object.entries(answersPercentages)
        .map(([answer, percent]) => `${answer}: ${percent}%`)
        .join("<br>");
  });

  if (helplineUsed.switchQuestion) {
    switchQuestionButton.style.display = "none";
  }
  switchQuestionButton.addEventListener("click", () => {
    if (helplineUsed.switchQuestion) return;
    helplineUsed.switchQuestion = true;
    switchQuestionButton.style.display = "none";
    question.style.display = "none";

    choice.remove();
    renderChoicePage();
  });

  answers.forEach((answer) => {
    const answerButton = document.createElement("button");
    answerButton.classList.add("answerbutton");
    answerButton.textContent = `${answer}`;

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

  helplineDiv.append(
    askFriendButton,
    fiftyFiftyButton,
    switchQuestionButton,
    askAudienceButton
  );

  gameContainer.append(helplineDiv, answerDiv);

  answerDiv.classList.add("answer-div");
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

  continueToStartButton.addEventListener("click", () => {
    helplineUsed.askFriend = false;
    helplineUsed.askAudience = false;
    helplineUsed.switchQuestion = false;
    choice.remove();
    question.remove();
    start.style.display = "flex";
  });
};
