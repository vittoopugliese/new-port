import {useState} from "react";

function resolveLogoSrc(item, logoFolder) {
  if (item?.logo?.includes(".png") || item?.logo?.includes(".webp")) return `${logoFolder}${item.logo}`;
  if (item.logo) return `${logoFolder}${item.logo}.svg`;
  return `${logoFolder}${item.name}.webp`;
}

function getLogoKey(logo) {
  return logo?.replace(/\.(png|webp|svg)$/i, "") ?? "";
}

export const CarouselItem = ({item, logoFolder, onHover, onUnhover}) => {
  const [hovered, setHovered] = useState(false);
  const logoSrc = resolveLogoSrc(item, logoFolder);

  function handleMouseOver() {
    setHovered(true);
    onHover(item.desc);
  }

  function handleMouseLeave() {
    setHovered(false);
    onUnhover();
  }

  const logoKey = getLogoKey(item.logo);
  const haveToMoveUp = ["minimax", "openai", "grok"].includes(logoKey);
  const haveToBorderRad = ["cursor", "minimax"].includes(logoKey);
  const haveToDownscale = ["openai", "anthropic"].includes(logoKey);

  return (
    <div className="carousel-slide-item">
      <img
        style={{
          scale: hovered ? "1.05" : "1",
          ...(haveToDownscale && {scale: "0.92"}),
          ...(haveToMoveUp && {position: "relative", top: "-5px"}),
          ...(haveToBorderRad && {borderRadius: "0.74em"}),
          filter: "drop-shadow(1px 1px 8px rgba(255, 255, 255, 0.08))"
        }}
        className="carrousel-image"
        draggable="false"
        src={logoSrc}
        alt={item.name}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      />
      <p style={{opacity: hovered ? "1" : "0"}}>{item.name}</p>
    </div>
  );
};
