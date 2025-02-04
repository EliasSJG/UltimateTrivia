import "./_dropdown.scss";
import { getQuestion, getCategory, getDifficulty } from "../../api/api";
import categoryCorrection from "../../state/state";
import { continueToQuestionButton } from "../../pages/choice/choice";
import { Question } from "../../typings/typings";

export let selectQuestion: HTMLButtonElement;
export let selectDifficulty: HTMLButtonElement;
export let selectCategory: HTMLButtonElement;
let selectedQuestion: Question;

export const loadDropdowns = () => {
  selectQuestion = document.getElementById("getquestion") as HTMLButtonElement;
  selectDifficulty = document.getElementById(
    "getdifficulty"
  ) as HTMLButtonElement;
  selectCategory = document.getElementById("getcategory") as HTMLButtonElement;

  selectCategory.disabled = false;
  selectCategory.innerHTML = "Select a Category";

  selectQuestion.disabled = true;
  selectQuestion.innerHTML = "Select a Question";

  selectDifficulty.disabled = true;
  selectDifficulty.innerHTML = "Select a Difficulty";
  continueToQuestionButton.style.display = "none";
};

//TYPA UPP
export const populateCategories = async () => {
  const categories = await getCategory();
  const categoryKeys = Object.keys(categories);

  const categoryOptionDiv = document.createElement("div");

  categoryOptionDiv.style.display = "none";

  categoryKeys.forEach((cate: string) => {
    const div = document.createElement("div");
    div.innerHTML = `<li>${cate}</li>`;
    div.classList.add("custom-option");

    div.addEventListener("click", () => {
      selectCategory.innerHTML = `<div>${cate}</div>`;
      selectCategory.disabled = true;

      selectDifficulty.disabled = false;
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
  selectDifficulty.disabled = true;
  const difficultyOptionDiv = document.createElement("div");
  difficultyOptionDiv.style.display = "none";

  difficulties.forEach((difficulty) => {
    const div = document.createElement("div");
    div.innerHTML = `<li>${difficulty}</li>`;
    div.classList.add("custom-option");

    div.addEventListener("click", () => {
      selectDifficulty.innerHTML = `<div>${difficulty}</div>`;
      selectDifficulty.disabled = true;
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
  questionOptionDiv.style.display = "none";
  questionOptionDiv.classList.add("questionlist");
  const correctCategory = categoryCorrection[category];

  if (difficulty && correctCategory) {
    const questions = await getQuestion(difficulty, correctCategory);
    console.log(questions);

    selectQuestion.disabled = false;

    questions.forEach((question) => {
      const div = document.createElement("div");
      div.innerHTML = `<li>${question.question}</li>`;
      div.classList.add("custom-option");

      div.addEventListener("click", () => {
        selectQuestion.innerHTML = `<div>${question.question}</div>`;
        selectQuestion.disabled = true;

        selectedQuestion = question;

        continueToQuestionButton.style.display = "block";
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

export const getSelectedQuestion = () => selectedQuestion;
