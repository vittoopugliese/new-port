import {ProfileGlass} from "../components/Profile/ProfileGlass";
import {Projects} from "../components/Projects/Projects";
import {MoreProjects} from "../components/MiniProjects/MoreProjects";
import {Carrousel} from "../components/Carrousel/Carrousel";
import {Button} from "../components/Shared/Button";
import {useEffect} from "react";

export const MainPage = ({planetSelectorOpen, onTogglePlanets, mobileFull, onToggleMobileFull}) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <main>
      <ProfileGlass
        planetSelectorOpen={planetSelectorOpen}
        onTogglePlanets={onTogglePlanets}
        mobileFull={mobileFull}
        onToggleMobileFull={onToggleMobileFull}
      />
      <Projects />
      <Carrousel />
      <MoreProjects />

      <div className="button-container">
        <Button text="About me" path="/about" />
      </div>
    </main>
  );
};
