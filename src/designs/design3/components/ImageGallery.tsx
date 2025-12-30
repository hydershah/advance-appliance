'use client';

import React, { useState, useCallback } from 'react';
import { useLockBodyScroll } from '../hooks/useScrollAnimation';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  variant?: 'grid' | 'masonry' | 'carousel';
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  columns = 3,
  variant = 'grid',
  className = '',
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useLockBodyScroll(lightboxOpen);

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    },
    [closeLightbox, goToPrevious, goToNext]
  );

  const columnClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid ${columnClasses[columns]} gap-6 ${className}`}>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="relative group overflow-hidden rounded-lg border-2 border-forest/20 hover:border-copper transition-colors focus:outline-none focus:ring-4 focus:ring-copper/30"
            aria-label={`View ${image.alt}`}
          >
            {/* Image container with frame effect */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Vignette effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-forest/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Frame corners */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-copper opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-copper opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-copper opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-copper opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Zoom icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-ivory/90 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Caption */}
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest to-transparent p-4">
                <p className="font-serif text-ivory text-sm">{image.caption}</p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-forest/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-ivory/10 hover:bg-ivory/20 rounded-full flex items-center justify-center text-ivory transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-ivory/10 hover:bg-ivory/20 rounded-full flex items-center justify-center text-ivory transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-ivory/10 hover:bg-ivory/20 rounded-full flex items-center justify-center text-ivory transition-colors"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="max-w-4xl max-h-[80vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-lg border-4 border-copper shadow-2xl"
            />
            {images[currentIndex].caption && (
              <p className="text-center text-ivory font-serif mt-4 text-lg">
                {images[currentIndex].caption}
              </p>
            )}
          </div>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-ivory/10 px-4 py-2 rounded-full">
            <p className="text-ivory font-serif text-sm">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
