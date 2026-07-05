import {useEffect, useState} from "react";
import {SectionTitle} from "../Shared/SectionTitle";
import {ImageViewer, useImageViewer} from "../Shared/ImageViewer";
import {usePrefersReducedMotion} from "../../hooks/usePrefersReducedMotion";
import {agentsShowcase} from "../../utils/constants";
import "./agents-showcase.css";

// Keep in sync with the `agents-progress` animation duration in agents-showcase.css
const AUTOPLAY_MS = 5000;

export const AgentsShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cycle, setCycle] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const {isOpen, initialIndex, openViewer, setIsOpen} = useImageViewer();

  const slides = agentsShowcase;
  const slide = slides[currentIndex];
  const autoplayEnabled = !prefersReducedMotion && !isPaused && !isOpen && slides.length > 1;

  useEffect(() => {
    if (!autoplayEnabled) return;
    const id = setTimeout(() => {
      setCurrentIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [autoplayEnabled, currentIndex, cycle, slides.length]);

  const goPrev = () => setCurrentIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setCurrentIndex((i) => (i + 1) % slides.length);

  const handleMouseLeave = () => {
    setIsPaused(false);
    setCycle((c) => c + 1);
  };

  return (
    <section className="agents-showcase-section">
      <SectionTitle
        iconClass="fa-solid fa-robot"
        title="How I work with AI agents"
        subtitle="Click the image to view fullscreen"
      />

      <div
        className="agents-showcase"
        data-aos="fade-up"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={handleMouseLeave}
        onTouchStart={() => setIsPaused(true)}
      >
        <div className="glass-distortion" aria-hidden="true" />
        <div className="glass-tint" aria-hidden="true" />
        <div className="glass-shine" aria-hidden="true" />

        <div className="agents-showcase__content">
          <div className="agents-showcase__stage">
            <img
              src={slide.uri}
              alt={slide.alt}
              draggable={false}
              onClick={() => openViewer(currentIndex)}
            />

            <button
              type="button"
              className="agents-showcase__nav prev"
              onClick={goPrev}
              aria-label="Previous slide"
            >
              <i className="fa-solid fa-chevron-left" />
            </button>

            <button
              type="button"
              className="agents-showcase__nav next"
              onClick={goNext}
              aria-label="Next slide"
            >
              <i className="fa-solid fa-chevron-right" />
            </button>

            {autoplayEnabled && (
              <div className="agents-showcase__progress" aria-hidden="true">
                <span key={`${currentIndex}-${cycle}`} />
              </div>
            )}
          </div>

          <p className="agents-showcase__caption" key={currentIndex}>
            {slide.caption}
          </p>

          <div className="agents-showcase__thumbs">
            {slides.map((img, index) => (
              <button
                key={index}
                type="button"
                className={`agents-showcase__thumb${index === currentIndex ? " active" : ""}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <img src={img.uri} alt={img.alt} draggable={false} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <ImageViewer
        images={slides}
        initialIndex={initialIndex}
        open={isOpen}
        onOpenChange={setIsOpen}
      />
    </section>
  );
};
