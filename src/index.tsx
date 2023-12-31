import ReactDOM from "react-dom/client";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";

import "./services/i18n"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

AOS.init({
  duration: 800,
  once: true,
  delay: 0,
  easing: "ease-in-out",
});

document.body.style.margin = "0";
