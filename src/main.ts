import { pricePot } from "./components/progressbar/progressbar";
import "./main.scss";

import {
  renderChoicePage,
  continueToChoiceButton,
} from "./pages/choice/choice";

continueToChoiceButton.addEventListener("click", () => {
  renderChoicePage();
  pricePot();
});
//create a file just for rendering
