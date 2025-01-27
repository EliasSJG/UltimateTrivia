import "./main.scss";

import {
  renderChoicePage,
  continueToChoiceButton,
} from "./pages/choice/choice";

continueToChoiceButton.addEventListener("click", renderChoicePage);
//create a file just for rendering
