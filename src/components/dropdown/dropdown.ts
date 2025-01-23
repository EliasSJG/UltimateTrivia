import "./_dropdown.scss";
import { getQuestion, getCategory, getDifficulty } from "../../api/api";
import categoryCorrection from "../../state/state";

//DOM Elements

export let selectQuestion: HTMLSelectElement;
export let selectDifficulty: HTMLSelectElement;
export let selectCategory: HTMLSelectElement;

export const loadDropdowns = () => {
  selectQuestion = document.getElementById("getquestion") as HTMLSelectElement;

  selectDifficulty = document.getElementById(
    "getdifficulty"
  ) as HTMLSelectElement;

  selectCategory = document.getElementById("getcategory") as HTMLSelectElement;

  selectCategory.addEventListener("change", async () => {
    selectCategory.disabled = true;
  });
  selectDifficulty.addEventListener("change", async () => {
    selectDifficulty.disabled = true;
  });

  selectQuestion.addEventListener("change", async () => {
    selectQuestion.disabled = true;
  });
};

//TYPA UPP
export const populateCategories = async () => {
  const categories = await getCategory();
  const categoryKeys = Object.keys(categories);

  categoryKeys.forEach((cate: string) => {
    const opt = document.createElement("option");
    opt.innerHTML = cate;
    selectCategory?.appendChild(opt);
  });
};

export const populateDifficulties = async () => {
  const difficulties = await getDifficulty();

  difficulties.forEach((difficulty) => {
    const opt = document.createElement("option");
    opt.innerHTML = difficulty;
    selectDifficulty.appendChild(opt);
  });
};

export const changeQuestions = async () => {
  const difficulty = selectDifficulty.value;
  const category = selectCategory.value;

  const correctCategory = categoryCorrection[category];

  if (difficulty && correctCategory) {
    const questions = await getQuestion(difficulty, correctCategory);
    console.log(questions);
    selectQuestion.innerHTML = "";

    questions.forEach((question) => {
      const opt = document.createElement("option");
      opt.innerHTML = question.question;
      selectQuestion.appendChild(opt);
    });
  }
};
