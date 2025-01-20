import "./_dropdown.scss";
import { getQuestion, getCategory } from "../../api/api";

//DOM Elements
export const selectQuestion = document.getElementById(
  "getquestion"
) as HTMLSelectElement;

export const selectDifficulty = document.getElementById(
  "getdifficulty"
) as HTMLSelectElement;

export const selectCategory = document.getElementById(
  "getcategory"
) as HTMLSelectElement;
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

export const changeQuestions = async () => {
  const difficulty = selectDifficulty.value;
  const category = selectCategory.value;

  if (difficulty && category) {
    const questions = await getQuestion(difficulty, category);
    console.log(questions);
    selectQuestion.innerHTML = "";

    questions.forEach((question) => {
      const opt = document.createElement("option");
      opt.innerHTML = question.question;
      selectQuestion.appendChild(opt);
    });
  }
};
