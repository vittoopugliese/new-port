import {Profile} from "../components/Profile/Profile";
import {Projects} from "../components/Projects/Projects";
import {MoreProjects} from "../components/MiniProjects/MoreProjects";
import {Carrousel} from "../components/Carrousel/Carrousel";
import {Button} from "../components/Shared/Button";
import {useEffect} from "react";

export const MainPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <main>
      <Profile />
      <hr />
      <Projects />
      <Carrousel />
      <MoreProjects />
      <div className="button-container">
        <Button
          text="About me"
          path="/about"
          iconClass={"fa-solid fa-arrow-right"}
        />
      </div>
    </main>
  );
};
