import React from 'react';
import '../styles/projectcard.css';

const getYouTubeId = (url) => {
  if (!url) return null;

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes('youtu.be')) {
      return parsedUrl.pathname.split('/').filter(Boolean)[0];
    }

    if (parsedUrl.hostname.includes('youtube.com')) {
      if (parsedUrl.pathname.startsWith('/embed/')) {
        return parsedUrl.pathname.split('/embed/')[1];
      }

      return parsedUrl.searchParams.get('v');
    }
  } catch (error) {
    console.error('Invalid video URL:', error);
  }

  return null;
};

const ProjectCard = ({
  title,
  subtitle,
  date,
  description,
  role,
  image,
  videoUrl,
  isNew,
  buttonLink,
  onPlay,
}) => {
  const videoId = getYouTubeId(videoUrl);

  const videoThumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : null;

  const displayedImage = image || videoThumbnail;
  const hasVideo = Boolean(videoUrl);

  return (
    <article className="project-card">
      {hasVideo ? (
        <button
          type="button"
          className="project-card-media project-card-media--video"
          onClick={onPlay}
          aria-label={`Play ${title} video`}
        >
          {displayedImage ? (
            <img
              src={displayedImage}
              alt=""
              className="project-card-image"
            />
          ) : (
            <div className="project-card-placeholder">
              Video preview unavailable
            </div>
          )}

          <span className="project-card-media-overlay" />

          <span className="project-play-button" aria-hidden="true">
            <span className="project-play-icon" />
          </span>
        </button>
      ) : (
        <div className="project-card-media">
          <img
            src={displayedImage}
            alt={`${title} project`}
            className="project-card-image"
          />
        </div>
      )}

      <div className="project-card-content">
        <p className="project-card-date">{date}</p>

        <div className="project-card-title-row">
          <div className="project-card-heading">
            <h3 className="project-card-title">{title}</h3>

            {isNew && (
              <span className="project-card-badge">NEW</span>
            )}
          </div>

          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
            aria-label={`Open ${title} project`}
          >
            <span aria-hidden="true">+</span>
          </a>
        </div>

        {subtitle && (
          <p className="project-card-subtitle">{subtitle}</p>
        )}

        <p className="project-card-description">{description}</p>

        {role && (
          <div className="project-card-role">
            <span className="project-card-role-label">
              ROLE
            </span>

            <p>{role}</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;