import "./_helpbutton.scss";
import askAudience from "../../assets/AskTheAudienceHelpline.svg";
import callFriend from "../../assets/CallAFriendHelpline.svg";
import fiftyFifty from "../../assets/FiftyFiftyHelpline.svg";
import switchQuestion from "../../assets/SwitchQuestionHelpline.svg";
import { getSelectedQuestion } from "../dropdown/dropdown";
import { renderChoicePage } from "../../pages/choice/choice";

//Checking if helpline is used
let helplineUsed = {
  askFriend: false,
  askAudience: false,
  fiftyFifty: false,
  switchQuestion: false,
};

//Creating helpline
export const createHelplineButton = (
  helplineType: keyof typeof helplineUsed,
  src: string,
  alt: string,
  helplineAnswerDiv: HTMLDivElement | null,
  clicker: () => void
) => {
  const helplineButton = document.createElement("button");
  helplineButton.classList.add("helpline");
  const icon = document.createElement("img");
  icon.src = src;
  icon.alt = alt;
  icon.classList.add("helpline-img");
  helplineButton.appendChild(icon);

  //If its used then remove the button
  if (helplineUsed[helplineType]) {
    helplineButton.style.display = "none";
  }
  helplineButton.addEventListener("click", () => {
    //if its used then return it and make it true that it is used
    if (helplineUsed[helplineType]) return;
    helplineUsed[helplineType] = true;
    if (helplineAnswerDiv) {
      helplineAnswerDiv.style.display = "block";
    }
    helplineButton.style.display = "none";
    clicker();
  });

  return helplineButton;
};

//Ask the audience helpline button
export const askAudienceHelpline = (helplineAnswerDiv: HTMLDivElement) => {
  return createHelplineButton(
    "askAudience",
    askAudience,
    "Ask The Audience Helpline",
    helplineAnswerDiv,
    () => {
      const selectedQuestion = getSelectedQuestion();
      const correctAudienceAnswer = selectedQuestion.correctAnswer;
      const incorrectAudienceAnswer = selectedQuestion.incorrectAnswers;

      //variables to for percentages
      const answersPercentages: { [key: string]: number } = {};
      let correctPercentage: number;
      let remainingPercentages = 100;
      //70% chance that the audience has correct
      if (Math.random() < 0.7) {
        correctPercentage = Math.floor(Math.random() * 21) + 60;
      } //other has a 30% chance of being correct
      else {
        correctPercentage = Math.floor(Math.random() * 31) + 10;
      }
      //removes the 100% and substracts it with the correct percantage

      remainingPercentages -= correctPercentage;
      answersPercentages[correctAudienceAnswer] = correctPercentage;
      //giving random percantage to the remaining answers
      //if last inncorect answer it gets whatever percent remains
      incorrectAudienceAnswer.forEach((answer, index) => {
        if (index === incorrectAudienceAnswer.length - 1) {
          answersPercentages[answer] = remainingPercentages;
        } else {
          const percent = Math.floor(Math.random() * remainingPercentages);
          answersPercentages[answer] = percent;
          remainingPercentages -= percent;
        }
      });

      //displaying the results,converts answerPercentage to list of formatted strings

      helplineAnswerDiv.innerHTML =
        `Audience Poll: <br>` +
        Object.entries(answersPercentages)
          .map(([answer, percent]) => `${answer}: ${percent}%`)
          .join("<br>");
    }
  );
};

//Call a friend helpline button
export const askFriendHelpline = (helplineAnswerDiv: HTMLDivElement) => {
  return createHelplineButton(
    "askFriend",
    callFriend,
    "Call A Friend Helpline",
    helplineAnswerDiv,
    () => {
      const selectedQuestion = getSelectedQuestion();
      //variabel for friend answer
      let friendAnswer: string;
      //65% chance that friend is correct
      if (Math.random() < 0.65) {
        friendAnswer = selectedQuestion.correctAnswer;
      } else {
        const friendWrongAnswer = selectedQuestion.incorrectAnswers[0];

        friendAnswer = friendWrongAnswer;
      }
      helplineAnswerDiv.innerHTML = `Friend - "I think that ${friendAnswer} is correct!"`;
    }
  );
};

//Fifty fifty helpline button
export const fiftyFiftyHelpline = (helplineAnswerDiv: HTMLDivElement) => {
  return createHelplineButton(
    "fiftyFifty",
    fiftyFifty,
    "Fifty Fifty Helpline",
    helplineAnswerDiv,
    () => {
      const selectedQuestion = getSelectedQuestion();
      //Gets a random incorrect answer
      const randomIncorrectAnswer =
        selectedQuestion.incorrectAnswers[
          Math.floor(Math.random() * selectedQuestion.incorrectAnswers.length)
        ];
      //take the right and random wrong answers and ramdomly places them
      const fiftyOptions = [
        selectedQuestion.correctAnswer,
        randomIncorrectAnswer,
      ].sort(() => Math.random() - 0.5);
      helplineAnswerDiv.innerHTML = `The answer is either ${fiftyOptions[0]} or ${fiftyOptions[1]}`;
    }
  );
};

//Switch question helpline button
export const switchQuestionHelpline = (
  question: HTMLDivElement,
  choice: HTMLDivElement
) => {
  return createHelplineButton(
    "switchQuestion",
    switchQuestion,
    "Switch Question Helpline",
    null,
    () => {
      question.style.display = "none";
      choice.remove();
      renderChoicePage();
    }
  );
};

export const resetHelplines = () => {
  helplineUsed.askFriend = false;
  helplineUsed.askAudience = false;
  helplineUsed.switchQuestion = false;
  helplineUsed.fiftyFifty = false;
};
