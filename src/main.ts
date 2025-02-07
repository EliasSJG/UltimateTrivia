import { pricePot } from "./components/progressbar/progressbar";
import "./main.scss";

import { continueToChoiceButton } from "./pages/choice/choice";

continueToChoiceButton.addEventListener("click", () => {
  pricePot();
});
