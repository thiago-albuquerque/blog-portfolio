import "./home.css";

import Header from "./Components/Header";
import Skills from "./Components/Skills";
import WebProjects from "./Components/WebProjects";
import MobileProjects from "./Components/MobileProjects";
import About from "./Components/About";

import { TiArrowSortedUp } from "react-icons/ti";

export default function Home() {
  return (
    <div>
      <Header />
      <Skills />
      <MobileProjects />
      <WebProjects />
      <About />

      <div className="scrooll-top">
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <TiArrowSortedUp />
        </button>
      </div>
    </div>
  );
}
