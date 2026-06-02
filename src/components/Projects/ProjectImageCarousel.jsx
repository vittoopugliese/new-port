import {useState} from "react";

export const ProjectImageCarousel = ({images, title, onImageClick}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stopClick = (e) => e.stopPropagation();

  const goTo = (e, index) => {
    stopClick(e);
    setCurrentIndex(index);
  };

  const goPrev = (e) => {
    stopClick(e);
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const goNext = (e) => {
    stopClick(e);
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  const handleImageClick = (e) => {
    stopClick(e);
    onImageClick?.(currentIndex);
  };

  return (
    <div className="project-carousel">
      <img
        src={images[currentIndex]}
        alt={`${title} screenshot ${currentIndex + 1}`}
        draggable={false}
        onClick={handleImageClick}
        className="project-carousel-image"
      />

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="project-carousel-btn prev"
            onClick={goPrev}
            aria-label="Previous image">
            <i className="fa-solid fa-chevron-left" />
          </button>
          <button
            type="button"
            className="project-carousel-btn next"
            onClick={goNext}
            aria-label="Next image">
            <i className="fa-solid fa-chevron-right" />
          </button>

          <div className="project-carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`project-carousel-dot${i === currentIndex ? " active" : ""}`}
                onClick={(e) => goTo(e, i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};