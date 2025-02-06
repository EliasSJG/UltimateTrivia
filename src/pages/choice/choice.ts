import "./_choice.scss";

import {
  changeQuestions,
  loadDropdowns,
  populateCategories,
  populateDifficulties,
  selectCategory,
  selectDifficulty,
} from "../../components/dropdown/dropdown";
import {
  renderChoiceButton,
  renderModalButton,
  renderQuestionButton,
} from "../../components/buttons/continuebutton";
import { renderQuestionPage } from "../question/question";

export const continueToQuestionButton = renderQuestionButton();
//do a file for global variables connected to DOM
const choice = document.querySelector("#choice") as HTMLDivElement;
const start = document.querySelector("#start") as HTMLDivElement;
const question = document.createElement("div") as HTMLDivElement;
export const continueToChoiceButton = renderChoiceButton(question, choice);
export const openModal = renderModalButton();
start.append(continueToChoiceButton);

export const renderChoicePage = () => {
  const heading = document.createElement("h1") as HTMLHeadingElement;
  const choice = document.createElement("div") as HTMLDivElement;

  heading.classList.add("main-title");
  heading.innerHTML = "Choose Your Question";

  choice.id = "choice";
  choice.classList.add("choice-layout");

  const categorySelect = document.createElement("button");
  categorySelect.id = "getcategory";
  categorySelect.classList.add("custom-dropdown");

  const difficultySelect = document.createElement("button");
  difficultySelect.id = "getdifficulty";
  difficultySelect.classList.add("custom-dropdown");

  const questionSelect = document.createElement("button");
  questionSelect.id = "getquestion";
  questionSelect.classList.add("custom-dropdown");

  choice.style.display = "flex";
  continueToQuestionButton.style.display = "none";
  choice.append(
    heading,
    categorySelect,
    difficultySelect,
    questionSelect,
    continueToQuestionButton,
    openModal
  );

  document.body.appendChild(choice);

  start.style.display = "none";

  loadDropdowns();

  populateCategories();

  populateDifficulties();

  selectCategory.addEventListener("click", changeQuestions);
  selectDifficulty.addEventListener("click", changeQuestions);
  continueToQuestionButton.addEventListener("click", renderQuestionPage);
};
