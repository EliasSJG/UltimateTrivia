import "./main.scss";

import {
  changeQuestions,
  selectCategory,
  selectDifficulty,
  populateCategories,
} from "./components/dropdown/dropdown";

await populateCategories();
selectCategory.addEventListener("change", changeQuestions);
selectDifficulty.addEventListener("change", changeQuestions);
