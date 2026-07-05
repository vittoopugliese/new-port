import { useState, useCallback, useEffect, useRef, type TouchEvent } from "react";
import { createPortal } from "react-dom";
import "./image-viewer.css";

export interface ImageSource {
  uri: string;
  alt?: string;
  caption?: string;
}

interface ImageViewerProps {
  images: ImageSource[];
  initialIndex?: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  showThumbnails?: boolean;
  showCounter?: boolean;
}

const SWIPE_THRESHOLD = 50;

export function ImageViewer({
  images,
  initialIndex = 0,
  open,
  onOpenChange,
  showThumbnails = true,
  showCounter = true,
}: ImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (open) setCurrentIndex(initialIndex);
  }, [open, initialIndex]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  const handleClose = useCallback(() => {
    onOpenChange(false);
  }, [onOpenChange]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          handlePrevious();
          break;
        case "ArrowRight":
          event.preventDefault();
          handleNext();
          break;
        case "Escape":
          handleClose();
          break;
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, handlePrevious, handleNext, handleClose]);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null || images.length <= 1) return;

    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;

    if (deltaX > 0) handlePrevious();
    else handleNext();
  };

  const currentImage = images.at(currentIndex);

  if (!open || !currentImage || images.length === 0) return null;

  return createPortal(
    <div
      className="image-viewer-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={handleClose}
    >
      <div className="image-viewer-content" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="image-viewer-close"
          onClick={handleClose}
          aria-label="Close viewer"
        >
          <i className="fa-solid fa-xmark" />
        </button>

        {images.length > 1 && (
          <button
            type="button"
            className="image-viewer-nav prev"
            onClick={handlePrevious}
            aria-label="Previous image"
          >
            <i className="fa-solid fa-chevron-left" />
          </button>
        )}

        <div
          className="image-viewer-main"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={currentImage.uri}
            alt={currentImage.alt ?? `Image ${currentIndex + 1}`}
            draggable={false}
          />
        </div>

        {images.length > 1 && (
          <button
            type="button"
            className="image-viewer-nav next"
            onClick={handleNext}
            aria-label="Next image"
          >
            <i className="fa-solid fa-chevron-right" />
          </button>
        )}

        {currentImage.caption && (
          <p className="image-viewer-caption">{currentImage.caption}</p>
        )}

        {showCounter && images.length > 1 && (
          <p className="image-viewer-counter">
            {currentIndex + 1} / {images.length}
          </p>
        )}

        {showThumbnails && images.length > 1 && (
          <div className="image-viewer-thumbnails">
            {images.map((image, index) => (
              <button
                key={index}
                type="button"
                className={`image-viewer-thumbnail${index === currentIndex ? " active" : ""}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              >
                <img src={image.uri} alt={image.alt ?? `Preview ${index + 1}`} draggable={false} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

export function useImageViewer() {
  const [isOpen, setIsOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openViewer = useCallback((index = 0) => {
    setInitialIndex(index);
    setIsOpen(true);
  }, []);

  const closeViewer = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    initialIndex,
    openViewer,
    closeViewer,
    setIsOpen,
  };
}
