import {ProfileGlass} from "../components/Profile/ProfileGlass";
import {Projects} from "../components/Projects/Projects";
import {MoreProjects} from "../components/MiniProjects/MoreProjects";
import {AgentsShowcase} from "../components/AgentsShowcase/AgentsShowcase";
import {Carrousel} from "../components/Carrousel/Carrousel";
import {Button} from "../components/Shared/Button";
import {useEffect} from "react";
import {favoriteModels, techslogos} from "../utils/constants";

export const MainPage = ({ planetSelectorOpen, onTogglePlanets, mobileFull, onToggleMobileFull, }) => {
  useEffect(() => { window.scroll(0, 0); }, []);

  return (
    <main>
      <ProfileGlass
        planetSelectorOpen={planetSelectorOpen}
        onTogglePlanets={onTogglePlanets}
        mobileFull={mobileFull}
        onToggleMobileFull={onToggleMobileFull}
      />

      <Projects />

      <AgentsShowcase />

      <div className="carousels-stack">
        <Carrousel 
          title="Technologies I use"
          items={techslogos} 
          iconClass="fa-solid fa-microchip"
          className="carousel--tech"
          logoFolder="./tech-logos/"
          placeholderDesc="Hover a tech to see a description..."
        />

        {/* <Carrousel
          title="Favorite models"
          items={favoriteModels}
          iconClass="fa-solid fa-brain"
          logoFolder="./model-logos/"
          placeholderDesc="Hover a model to see why I like it..."
          className="carousel--models"
        /> */}
      </div>

      <MoreProjects />

      <div className="button-container">
        <Button text="About me" path="/about" />
      </div>
    </main>
  );
};