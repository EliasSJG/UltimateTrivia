import "./_dropdown.scss";
import { getQuestion, getCategory, getDifficulty } from "../../api/api";
import categoryCorrection from "../../state/state";

//DOM Elements

export let selectQuestion: HTMLButtonElement;
export let selectDifficulty: HTMLButtonElement;
export let selectCategory: HTMLButtonElement;

export const loadDropdowns = () => {
  selectQuestion = document.getElementById("getquestion") as HTMLButtonElement;
  selectQuestion.innerHTML = "Select a Question";
  selectDifficulty = document.getElementById(
    "getdifficulty"
  ) as HTMLButtonElement;

  selectCategory = document.getElementById("getcategory") as HTMLButtonElement;
};

//TYPA UPP
export const populateCategories = async () => {
  const categories = await getCategory();
  const categoryKeys = Object.keys(categories);

  const categoryOptionDiv = document.createElement("div");
  categoryOptionDiv.classList.add("custom-option-div");
  categoryOptionDiv.style.display = "none";
  selectCategory.innerHTML = "Select a Category";

  categoryKeys.forEach((cate: string) => {
    const div = document.createElement("div");
    div.innerHTML = cate;
    div.classList.add("custom-option");

    div.addEventListener("click", () => {
      selectCategory.innerHTML = `<div>${cate}</div>`;
      selectCategory.disabled = true;
      categoryOptionDiv.style.display = "none";
    });

    categoryOptionDiv.appendChild(div);
  });

  selectCategory.appendChild(categoryOptionDiv);

  selectCategory.addEventListener("click", () => {
    categoryOptionDiv.style.display =
      categoryOptionDiv.style.display === "block" ? "none" : "block";
  });
};

export const populateDifficulties = async () => {
  const difficulties = await getDifficulty();

  const difficultyOptionDiv = document.createElement("div");
  difficultyOptionDiv.classList.add("custom-option-div");
  difficultyOptionDiv.style.display = "none";

  selectDifficulty.innerHTML = "Select a Difficulty";
  difficulties.forEach((difficulty) => {
    const div = document.createElement("div");
    div.innerHTML = difficulty;
    div.classList.add("custom-option");

    div.addEventListener("click", () => {
      selectDifficulty.innerHTML = `<div>${difficulty}</div>`;
      selectDifficulty.disabled = true;
      difficultyOptionDiv.style.display = "none";
    });

    difficultyOptionDiv.appendChild(div);
  });
  selectDifficulty.appendChild(difficultyOptionDiv);

  selectDifficulty.addEventListener("click", () => {
    difficultyOptionDiv.style.display =
      difficultyOptionDiv.style.display === "block" ? "none" : "block";
  });
};

export const changeQuestions = async () => {
  //change, innertext to better
  const difficulty = selectDifficulty.innerText.trim();
  const category = selectCategory.innerText.trim();

  if (
    difficulty === "Select a Difficulty" ||
    category === "Select a Category"
  ) {
    return;
  }

  const questionOptionDiv = document.createElement("div");
  questionOptionDiv.classList.add("custom-option-div");
  questionOptionDiv.style.display = "none";

  const correctCategory = categoryCorrection[category];

  if (difficulty && correctCategory) {
    const questions = await getQuestion(difficulty, correctCategory);
    console.log(questions);

    selectQuestion.disabled = false;

    questions.forEach((question) => {
      const div = document.createElement("div");
      div.innerHTML = question.question;
      div.classList.add("custom-option");

      div.addEventListener("click", () => {
        selectQuestion.innerHTML = `<div>${question.question}</div>`;
        selectQuestion.disabled = true;
        questionOptionDiv.style.display = "none";
      });
      questionOptionDiv.appendChild(div);
    });
    selectQuestion.appendChild(questionOptionDiv);

    selectQuestion.addEventListener("click", () => {
      questionOptionDiv.style.display =
        questionOptionDiv.style.display === "block" ? "none" : "block";
    });
  }
};
