import "./_choice.scss";

import {
  changeQuestions,
  loadDropdowns,
  populateCategories,
  populateDifficulties,
} from "../../components/dropdown/dropdown";
import {
  renderChoiceButton,
  renderModalButton,
  renderQuestionButton,
} from "../../components/buttons/continuebutton";

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
  heading.textContent = "Choose Your Question";

  choice.id = "choice";
  choice.classList.add("choice-layout");
  const { selectCategory, selectDifficulty, selectQuestion } = loadDropdowns();

  choice.style.display = "flex";
  continueToQuestionButton.style.display = "none";
  choice.append(
    heading,
    selectCategory,
    selectDifficulty,
    selectQuestion,
    continueToQuestionButton,
    openModal
  );

  document.body.appendChild(choice);

  start.style.display = "none";

  populateCategories();

  populateDifficulties();

  selectCategory.addEventListener("click", changeQuestions);
  selectDifficulty.addEventListener("click", changeQuestions);
};
