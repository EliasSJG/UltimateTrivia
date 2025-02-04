import "./_helpbutton.scss";
import askAudience from "../../assets/AskTheAudienceHelpline.svg";
import callFriend from "../../assets/CallAFriendHelpline.svg";
import fiftyFifty from "../../assets/FiftyFiftyHelpline.svg";
import switchQuestion from "../../assets/SwitchQuestionHelpline.svg";
import { getSelectedQuestion } from "../dropdown/dropdown";
import { renderChoicePage } from "../../pages/choice/choice";

let helplineUsed = {
  askFriend: false,
  askAudience: false,
  fiftyFifty: false,
  switchQuestion: false,
};
export const createHelplineButton = (src: string, alt: string) => {
  const helplineButton = document.createElement("button");
  helplineButton.classList.add("helpline");

  const icon = document.createElement("img");
  icon.src = src;
  icon.alt = alt;
  icon.classList.add("helpline-img");
  helplineButton.appendChild(icon);

  return helplineButton;
};
export const askAudienceHelpline = (helplineAnswerDiv: HTMLDivElement) => {
  const helplineButton = createHelplineButton(
    askAudience,
    "Ask The Audience Helpline"
  );
  if (helplineUsed.askAudience) {
    helplineButton.style.display = "none";
  }
  helplineButton.addEventListener("click", () => {
    if (helplineUsed.askAudience) return;
    helplineUsed.askAudience = true;
    helplineAnswerDiv.style.display = "block";
    helplineButton.style.display = "none";
    const selectedQuestion = getSelectedQuestion();
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
  return helplineButton;
};

export const askFriendHelpline = (helplineAnswerDiv: HTMLDivElement) => {
  const helplineButton = createHelplineButton(
    callFriend,
    "Call A Friend Helpline"
  );
  if (helplineUsed.askFriend) {
    helplineButton.style.display = "none";
  }
  helplineButton.addEventListener("click", () => {
    if (helplineUsed.askFriend) return;
    helplineUsed.askFriend = true;
    helplineAnswerDiv.style.display = "block";
    helplineButton.style.display = "none";
    const selectedQuestion = getSelectedQuestion();
    let friendAnswer: string;
    if (Math.random() < 0.65) {
      friendAnswer = selectedQuestion.correctAnswer;
    } else {
      const friendWrongAnswer = selectedQuestion.incorrectAnswers[0];

      friendAnswer = friendWrongAnswer;
    }
    helplineAnswerDiv.innerHTML = `Friend - "I think that ${friendAnswer} is correct!"`;
  });

  return helplineButton;
};
export const fiftyFiftyHelpline = (helplineAnswerDiv: HTMLDivElement) => {
  const helplineButton = createHelplineButton(fiftyFifty, "50/50 Helpline");
  if (helplineUsed.fiftyFifty) {
    helplineButton.style.display = "none";
  }
  helplineButton.addEventListener("click", () => {
    if (helplineUsed.fiftyFifty) return;
    helplineUsed.fiftyFifty = true;
    helplineButton.style.display = "none";
    helplineAnswerDiv.style.display = "block";
    const selectedQuestion = getSelectedQuestion();
    const randomIncorrectAnswer =
      selectedQuestion.incorrectAnswers[
        Math.floor(Math.random() * selectedQuestion.incorrectAnswers.length)
      ];
    const fiftyOptions = [
      selectedQuestion.correctAnswer,
      randomIncorrectAnswer,
    ].sort(() => Math.random() - 0.5);
    helplineAnswerDiv.innerHTML = `The answer is either ${fiftyOptions[0]} or ${fiftyOptions[1]}`;
  });
  return helplineButton;
};

export const switchQuestionHelpline = (
  question: HTMLDivElement,
  choice: HTMLDivElement
) => {
  const helplineButton = createHelplineButton(
    switchQuestion,
    "Switch Question Helpline"
  );
  if (helplineUsed.switchQuestion) {
    helplineButton.style.display = "none";
  }
  helplineButton.addEventListener("click", () => {
    if (helplineUsed.switchQuestion) return;
    helplineUsed.switchQuestion = true;
    helplineButton.style.display = "none";
    question.style.display = "none";

    choice.remove();
    renderChoicePage();
  });
  return helplineButton;
};

export const resetHelplines = () => {
  helplineUsed.askFriend = false;
  helplineUsed.askAudience = false;
  helplineUsed.switchQuestion = false;
  helplineUsed.fiftyFifty = false;
};
