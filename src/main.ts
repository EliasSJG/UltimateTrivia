import "./main.scss";

import {
  changeQuestions,
  selectCategory,
  selectDifficulty,
  populateCategories,
  populateDifficulties,
} from "./components/dropdown/dropdown";
import {
  renderChoicePage,
  nextPageChoice,
} from "./components/buttons/continuebutton";

await populateCategories();
await populateDifficulties();
selectCategory.addEventListener("change", changeQuestions);
selectDifficulty.addEventListener("change", changeQuestions);
nextPageChoice.addEventListener("click", renderChoicePage);
