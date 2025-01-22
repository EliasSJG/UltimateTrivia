import "./main.scss";

import {
  changeQuestions,
  selectCategory,
  selectDifficulty,
  populateCategories,
  populateDifficulties,
} from "./components/dropdown/dropdown";

await populateCategories();
await populateDifficulties();
selectCategory.addEventListener("change", changeQuestions);
selectDifficulty.addEventListener("change", changeQuestions);
