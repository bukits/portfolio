import React, { useEffect } from 'react';
import '../styles/videomodal.css';

const getEmbedUrl = (url) => {
  if (!url) return '';

  try {
    const parsedUrl = new URL(url);

    // YouTube short URL
    if (parsedUrl.hostname.includes('youtu.be')) {
      const videoId = parsedUrl.pathname.replace('/', '');

      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    }

    // YouTube normal URL
    if (parsedUrl.hostname.includes('youtube.com')) {
      let videoId = parsedUrl.searchParams.get('v');

      if (parsedUrl.pathname.startsWith('/embed/')) {
        videoId = parsedUrl.pathname.split('/embed/')[1];
      }

      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    }

    // Vimeo
    if (parsedUrl.hostname.includes('vimeo.com')) {
      const videoId = parsedUrl.pathname.split('/').filter(Boolean).pop();

      return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    }

    return url;
  } catch (error) {
    console.error('Invalid video URL:', error);
    return '';
  }
};

const VideoModal = ({ title, videoUrl, onClose }) => {
  const embedUrl = getEmbedUrl(videoUrl);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="video-modal"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} video`}
      onMouseDown={handleBackdropClick}
    >
      <button
        type="button"
        className="video-modal-close"
        onClick={onClose}
        aria-label="Close video"
      >
        <span />
        <span />
      </button>

      <div className="video-modal-content">
        <div className="video-modal-player">
          <iframe
            src={embedUrl}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;