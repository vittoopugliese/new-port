import { MoreProjects } from "./MoreProjects";
import {Profile} from "./Profile";
import {Projects} from "./Projects";

const myImage = "https://mytherapist.vittoriop.dev/unknown.png";

export const MainPage = () => {
  return (
    <main>
      <Profile />
      <hr />
      <Projects />
      <MoreProjects />
    </main>
  );
};
