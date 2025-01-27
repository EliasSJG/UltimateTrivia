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
  renderQuestionButton,
} from "../../components/buttons/continuebutton";
import { renderQuestionPage } from "../question/question";

export const continueToChoiceButton = renderChoiceButton();
const start = document.querySelector("#start") as HTMLDivElement;
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

  const continueToQuestionButton = renderQuestionButton();

  choice.style.display = "flex";

  choice.append(
    heading,
    categorySelect,
    difficultySelect,
    questionSelect,
    continueToQuestionButton
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
