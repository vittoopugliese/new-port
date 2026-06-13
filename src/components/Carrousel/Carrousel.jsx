import {useState} from "react";
import {CarouselItem} from "./CarouselItem";
import "./carrousel.css";
import {SectionTitle} from "../Shared/SectionTitle";

export const Carrousel = ({iconClass, title, items, logoFolder, placeholderDesc, className, carrouselVel = 50, }) => {
  const [selectedDesc, setSelectedDesc] = useState(placeholderDesc);
  const [descVisible, setDescVisible] = useState(false);

  return (
    <section className={["carousel", className].filter(Boolean).join(" ")}>
      <div className="carrousel-velocity">
        <SectionTitle iconClass={iconClass} title={title} />
      </div>

      <div className="slider">
        <div className="slide-track" style={{"--carrousel-vel": carrouselVel + "s"}}>
          <div className="slide">
            {items.map((item, i) => (
              <CarouselItem key={item.name + i} item={item} logoFolder={logoFolder}
                onUnhover={() => setDescVisible(false)}
                onHover={(desc) => {
                  setDescVisible(true);
                  setSelectedDesc(desc);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="carousel-desc" style={{opacity: descVisible ? "1" : "0"}}>{selectedDesc}</p>
    </section>
  );
};