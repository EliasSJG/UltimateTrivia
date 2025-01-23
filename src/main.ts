import "./main.scss";

import { renderChoicePage, nextPageChoice } from "./pages/choice/choice";

nextPageChoice.addEventListener("click", renderChoicePage);
