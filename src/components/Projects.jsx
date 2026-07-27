import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import VideoModal from './VideoModal';
import autopilotImage from '../assets/projects/autopilot.png';
import inspireImage from '../assets/projects/inspire.png';

import '../styles/projects.css';

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const projectsData = [
    {
      title: 'Synergia',
      date: 'Ongoing',
      description:
        'Revolutionizing XR with adaptive, human-centric and inclusive virtual worlds powered by Generative AI and multimodal sensing.',
      videoUrl: 'https://www.youtube.com/watch?v=CxGFzhsCecE',
      isNew: true,
      buttonLink: 'https://project-synergia.eu/',
    },
    {
      title: 'Inspire',
      date: 'Ongoing',
      description:
        'Creating realistic digital humans and virtual environments through volumetric 3D reconstruction to deliver more immersive, interactive and effective XR training experiences.',
      image: inspireImage,
      isNew: false,
      buttonLink: 'https://www.ludusglobal.com/blog/ludus-lanza-inspire-digitalizacion-de-personas-y-entornos-con-captura-volumetrica-3d-para-formacion-xr',
    },
    {
      title: 'Autopilot',
      date: 'Ongoing',
      description:
        'Developing an autonomous robotic platform for minimally invasive laparoscopic surgery through surgical video analysis, 3D reconstruction, digital twins and artificial intelligence.',
      image: autopilotImage,
      isNew: false,
      buttonLink: 'https://www.vicomtech.org/en/rdi-tangible/projects/project/cpp-autopilot',
    },
    {
      title: 'Amplify',
      date: 'Ongoing',
      description:
        'Volumetric recording at Gran Teatre del Liceu — reimagining the opera experience.',
      videoUrl: 'https://www.youtube.com/watch?v=GsdheAZUFU0&time_continue=15&source_ve_path=NzY3NTg&embeds_referring_euri=https%3A%2F%2Fcabrero.me%2F',
      isNew: false,
      buttonLink: 'https://amplifyproject.eu/',
    },
    {
      title: 'Bazkaria',
      date: 'DEC 2025',
      description:
        'Eating together through immersive telepresence — a dinner at Mugaritz like no other.',
      videoUrl: 'https://www.youtube.com/watch?v=H4r9WMXuMZE',
      isNew: false,
      buttonLink: 'https://www.vicomtech.org/en/rdi-tangible/success-stories/story/bazkaria-eating-together-through-immersive-telepresence',
    },
    {
      title: 'Scenarist',
      date: 'NOV 2025',
      description:
        'Synthetic data generation for training AI algorithms oriented to public spaces protection',
      videoUrl: 'https://www.youtube.com/watch?v=3T8-GchrRtw',
      isNew: false,
      buttonLink: 'https://www.linkedin.com/posts/ai-scenarist-scenarist-ugcPost-7420102650915983360-cYai/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACeVyGoBDPbav93a-wJDt96gvIa2_bcDW7Q',
    },
    {
      title: 'VHOLO',
      date: 'OCT 2024',
      description:
        'Volumetric video delivered natively on the web.',
      videoUrl: 'https://www.youtube.com/watch?v=r2RzS2mV7fM&time_continue=0&source_ve_path=NzY3NTg&embeds_referring_euri=https%3A%2F%2Fcabrero.me%2F',
      isNew: false,
      buttonLink: 'https://www.vicomtech.org/en/rdi-tangible/projects/project/voluai-volumetric-video-on-the-web',
    },
  ];

  const openVideo = (project) => {
    if (!project.videoUrl) return;

    setActiveVideo({
      title: project.title,
      videoUrl: project.videoUrl,
    });
  };

  return (
    <section className="projects-section">
      <div className="project-cards">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
            onPlay={
              project.videoUrl
                ? () => openVideo(project)
                : undefined
            }
          />
        ))}
      </div>

      {activeVideo && (
        <VideoModal
          title={activeVideo.title}
          videoUrl={activeVideo.videoUrl}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  );
};


export default Projects;