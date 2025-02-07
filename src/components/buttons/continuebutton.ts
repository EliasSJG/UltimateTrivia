import { renderChoicePage } from "../../pages/choice/choice";
import { renderQuestionPage } from "../../pages/question/question";
import { totalPricePot } from "../../state/state";
import { createLeaveWithMoney } from "../modal/modal";
import "./_continuebutton.scss";
import { resetHelplines } from "./helpbutton";

//Creating button
export const createButton = (
  id: string,
  textContent: string,
  clicker: () => void
): HTMLButtonElement => {
  const button = document.createElement("button");
  button.classList.add("continuebutton");
  button.textContent = textContent;
  button.id = id;
  button.addEventListener("click", clicker);
  return button;
};

//Go to question page button
export const renderQuestionButton = () => {
  return createButton("next-page-question", "Continue To Question", () => {
    renderQuestionPage();
  });
};

//Go to choice page button
export const renderChoiceButton = (
  question: HTMLDivElement,
  choice: HTMLDivElement
) => {
  return createButton("next-page-choice", "Continue To Choice", () => {
    question.style.display = "none";
    if (choice) {
      choice.remove();
    }
    renderChoicePage();
  });
};

//Open modal/leave with money page
export const renderModalButton = () => {
  return createButton("next-page-modal", "Leave With Money", () => {
    createLeaveWithMoney();
  });
};

//Go to start page button
export const renderStartButton = (
  choice: HTMLDivElement,
  question: HTMLDivElement,
  start: HTMLDivElement,
  priceDivDelete: HTMLDivElement
) => {
  return createButton("next-page-start", "Continue To Start", () => {
    const modalButton = document.querySelector(
      "#next-page-modal"
    ) as HTMLButtonElement;

    resetHelplines();
    choice.remove();
    question.remove();
    start.style.display = "flex";
    priceDivDelete.remove();
    totalPricePot.totalPrice = 0;
    modalButton.style.display = "none";
  });
};
