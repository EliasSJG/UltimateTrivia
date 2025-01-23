import "./_choice.scss";

import {
  changeQuestions,
  loadDropdowns,
  populateCategories,
  populateDifficulties,
  selectCategory,
  selectDifficulty,
} from "../../components/dropdown/dropdown";

export const nextPageChoice = document.querySelector(
  "#next-page-choice"
) as HTMLButtonElement;

export const renderChoicePage = () => {
  const heading = document.createElement("h1") as HTMLHeadingElement;
  const choice = document.createElement("div") as HTMLDivElement;
  const start = document.querySelector("#start") as HTMLDivElement;

  heading.classList.add("main-title");
  heading.innerHTML = "Choose Your Question";

  choice.id = "choice";
  choice.classList.add("choice-layout");

  const categorySelect = document.createElement("select");
  categorySelect.id = "getcategory";
  categorySelect.innerHTML =
    '<option value="" disabled selected>Select a category</option>';

  const difficultySelect = document.createElement("select");
  difficultySelect.id = "getdifficulty";
  difficultySelect.innerHTML =
    '<option value="" disabled selected>Select a difficulty</option>';

  const questionSelect = document.createElement("select");
  questionSelect.id = "getquestion";
  questionSelect.innerHTML =
    '<option value="" disabled selected>Select a question</option>';

  const continueButton = document.createElement("button");
  continueButton.classList.add("continuebutton");
  continueButton.innerHTML = "Continue";

  choice.style.display = "flex";

  choice.append(
    heading,
    categorySelect,
    difficultySelect,
    questionSelect,
    continueButton
  );

  document.body.appendChild(choice);

  start.style.display = "none";
  loadDropdowns();

  populateCategories();
  populateDifficulties();

  selectCategory.addEventListener("change", changeQuestions);
  selectDifficulty.addEventListener("change", changeQuestions);
};
