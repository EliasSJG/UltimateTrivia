import { renderChoicePage } from "../../pages/choice/choice";
import { totalPricePot } from "../../state/state";
import { createLeaveWithMoney } from "../modal/modal";

import "./_continuebutton.scss";
import { resetHelplines } from "./helpbutton";

export const renderQuestionButton = () => {
  const continueToQuestionButton = document.createElement("button");
  continueToQuestionButton.classList.add("continuebutton");
  continueToQuestionButton.innerHTML = "Continue To Question";
  continueToQuestionButton.id = "next-page-question";
  return continueToQuestionButton;
};

export const renderChoiceButton = (
  question: HTMLDivElement,
  choice: HTMLDivElement
) => {
  const continueToChoiceButton = document.createElement("button");
  continueToChoiceButton.classList.add("continuebutton");
  continueToChoiceButton.innerHTML = "Continue To Choice";
  continueToChoiceButton.id = "next-page-choice";

  continueToChoiceButton.addEventListener("click", () => {
    question.style.display = "none";
    if (choice) {
      choice.remove();
    }
    renderChoicePage();
  });
  return continueToChoiceButton;
};

export const renderModalButton = () => {
  const continueToModalButton = document.createElement("button");
  continueToModalButton.classList.add("continuebutton");
  continueToModalButton.innerHTML = "Leave With Money";
  continueToModalButton.id = "next-page-modal";

  continueToModalButton.addEventListener("click", () => {
    createLeaveWithMoney();
  });
  return continueToModalButton;
};
export const renderStartButton = (
  choice: HTMLDivElement,
  question: HTMLDivElement,
  start: HTMLDivElement,
  priceDivDelete: HTMLDivElement
) => {
  const continueToStartButton = document.createElement("button");
  continueToStartButton.classList.add("continuebutton");
  continueToStartButton.innerHTML = "Continue To Start";
  continueToStartButton.id = "next-page-start";
  const modalButton = document.querySelector(
    "#next-page-modal"
  ) as HTMLButtonElement;
  continueToStartButton.addEventListener("click", () => {
    resetHelplines();
    choice.remove();
    question.remove();
    start.style.display = "flex";
    priceDivDelete.remove();
    totalPricePot.totalPrice = 0;
    modalButton.style.display = "none";
  });
  return continueToStartButton;
};
