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

  const categorySelect = document.createElement("button");
  categorySelect.id = "getcategory";
  categorySelect.classList.add("custom-dropdown");

  const difficultySelect = document.createElement("button");
  difficultySelect.id = "getdifficulty";
  difficultySelect.classList.add("custom-dropdown");

  const questionSelect = document.createElement("button");
  questionSelect.id = "getquestion";
  questionSelect.classList.add("custom-dropdown");

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

  console.log(selectCategory, selectDifficulty);
  document.body.appendChild(choice);

  start.style.display = "none";
  loadDropdowns();

  populateCategories();
  console.log("Categories populated");
  populateDifficulties();
  console.log("Difficulties populated");
  selectCategory.addEventListener("click", changeQuestions);
  selectDifficulty.addEventListener("click", changeQuestions);
};
