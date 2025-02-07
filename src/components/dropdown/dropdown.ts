import "./_dropdown.scss";
import { getQuestion, getCategory, getDifficulty } from "../../api/api";
import { categoryCorrection } from "../../state/state";
import { continueToQuestionButton } from "../../pages/choice/choice";
import { Question } from "../../typings/typings";

//Dropdown variables
export let selectQuestion: HTMLButtonElement;
export let selectDifficulty: HTMLButtonElement;
export let selectCategory: HTMLButtonElement;
let selectedQuestion: Question;

//Creating dropdown button
export const CreateDropdownButton = (id: string, text: string) => {
  const button = document.createElement("button");
  button.id = id;
  button.classList.add("custom-dropdown");
  button.textContent = text;

  return button;
};

//Loading in standard dropdown
export const loadDropdowns = () => {
  selectCategory = CreateDropdownButton(`getcategory`, `Select a Category`);
  selectDifficulty = CreateDropdownButton(
    `getdifficulty`,
    `Select a Difficulty`
  );
  selectQuestion = CreateDropdownButton(`getquestion`, `Select a Question`);

  selectCategory.disabled = false;
  selectCategory.textContent = "Select a Category";

  selectQuestion.disabled = true;
  selectQuestion.textContent = "Select a Question";

  selectDifficulty.disabled = true;
  selectDifficulty.textContent = "Select a Difficulty";
  continueToQuestionButton.style.display = "none";
  return { selectCategory, selectDifficulty, selectQuestion };
};

//Creating options in dropdown
const createDropdown = (
  button: HTMLButtonElement,
  items: string[] | Question[],
  clicker: (selected: string | Question) => void
) => {
  const optionDiv = document.createElement("div");
  optionDiv.style.display = "none";

  items.forEach((item) => {
    const div = document.createElement("div");
    //Seeing if item is a string or a question
    if (typeof item === "string") {
      div.innerHTML = `<li>${item}</li>`;
    } else {
      div.innerHTML = `<li>${item.question}</li>`;
    }
    div.classList.add("custom-option");

    //Seeing the chosen option
    div.addEventListener("click", () => {
      button.innerHTML = `<div>${
        typeof item === "string" ? item : item.question
      }</div>`;
      button.disabled = true;
      clicker(item);
    });

    optionDiv.appendChild(div);
  });

  button.appendChild(optionDiv);
  //Toggle, close and open dropdown button
  button.addEventListener("click", () => {
    optionDiv.style.display =
      optionDiv.style.display === "block" ? "none" : "block";
  });
};

//Populate category
export const populateCategories = async () => {
  //Getting api category
  const categories = await getCategory();
  const categoryKeys = Object.keys(categories);

  createDropdown(selectCategory, categoryKeys, () => {
    selectDifficulty.disabled = false;
  });
};

//Populate difficulty and selecting
export const populateDifficulties = async () => {
  //Getting api difficulty
  const difficulties = await getDifficulty();

  createDropdown(selectDifficulty, difficulties, () => {});
};

//Populating question
export const changeQuestions = async () => {
  //Collecting user chosen category and difficulty
  const difficulty = selectDifficulty.innerText.trim();
  const category = selectCategory.innerText.trim();
  //If it is standard on button then ignore
  if (
    difficulty === "Select a Difficulty" ||
    category === "Select a Category"
  ) {
    return;
  }
  //Helping api finding correct category option in state
  const correctCategory = categoryCorrection[category];

  if (difficulty && correctCategory) {
    //Getting api questions
    const questions = await getQuestion(difficulty, correctCategory);
    selectQuestion.disabled = false;

    createDropdown(selectQuestion, questions, (question) => {
      selectedQuestion = question as Question;
      selectQuestion.innerHTML = `<div>${selectedQuestion.question}</div>`;
      selectQuestion.disabled = true;
      continueToQuestionButton.style.display = "block";
    });
  }
};

export const getSelectedQuestion = () => selectedQuestion;
