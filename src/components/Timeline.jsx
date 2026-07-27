import React from 'react';
import { Chrono } from 'react-chrono';

import upm from '../assets/timeline/upm_logo.png';
import vicomtech from '../assets/timeline/vicomtech_logo.png';
import ubx from '../assets/timeline/ubx_logo.png';
import uam from '../assets/timeline/uam_logo.jpg';
import ppcu from '../assets/timeline/ppcu_logo.png';
import swicon from '../assets/timeline/swicon_logo.png';
import bme from '../assets/timeline/bme_logo.png';

import '../styles/timeline.css';

const entries = [
  {
    title: '2025-10-01',
    cardTitle: 'Industrial PhD at UPM',
    cardSubtitle:
      'Began an Industrial PhD in Communication Technologies and Systems at the Polytechnic University of Madrid.',
    cardDetailedText:
      'My research focuses on AI-driven pipelines for generating virtual environments, humans, and objects from real-world counterparts through multimodal scene understanding and digital representation.',
  },
  {
    title: '2024-02-01',
    cardTitle: 'Research Career at Vicomtech',
    cardSubtitle:
      'Joined the Digital Media Department at Vicomtech in Donostia–San Sebastián.',
    cardDetailedText:
      'Progressed from Research Intern to Research Assistant and currently work as a Researcher in the Interactive Media research line. My work includes computer vision, immersive XR, volumetric capture, 3D reconstruction, and Gaussian Splatting.',
  },
  {
    title: '2023-09-01',
    cardTitle: 'Erasmus Mundus MSc at the University of Bordeaux',
    cardSubtitle:
      'Completed the final stage of the Erasmus Mundus Joint MSc in Image Processing and Computer Vision in Bordeaux, France.',
    cardDetailedText:
      'Continued developing my expertise in image processing, computer vision, applied mathematics, and artificial intelligence.',
  },
  {
    title: '2023-02-01',
    cardTitle: 'Erasmus Mundus MSc at UAM',
    cardSubtitle:
      'Completed the second stage of the Erasmus Mundus Joint MSc at the Autonomous University of Madrid, Spain.',
    cardDetailedText:
      'Studied advanced computer vision, machine learning, image processing, and deep learning methods.',
  },
  {
    title: '2022-09-01',
    cardTitle: 'Erasmus Mundus MSc at PPCU',
    cardSubtitle:
      'Started the Erasmus Mundus Joint MSc in Image Processing and Computer Vision at Pázmány Péter Catholic University in Budapest, Hungary.',
    cardDetailedText:
      'Built a strong foundation in image processing, computer vision, mathematical modelling, and machine learning.',
  },
  {
    title: '2022-01-01',
    cardTitle: 'Software Engineer at SwiconGroup',
    cardSubtitle:
      'Joined SwiconGroup Zrt. as a Software Engineer in Budapest, Hungary.',
    cardDetailedText:
      'Developed frontend and backend features for contract management and HR workflow applications using Node.js, TypeScript, and Angular. I also contributed to a sales management application built with Java.',
  },
  {
    title: '2017-09-01',
    cardTitle: 'BSc in Computer Science Engineering',
    cardSubtitle:
      'Began my undergraduate studies at the Budapest University of Technology and Economics.',
    cardDetailedText:
      'Completed my BSc in Computer Science Engineering, establishing the technical foundation for my later work in software engineering, artificial intelligence, and computer vision.',
  },
];

const Timeline = () => {
  return (
    <Chrono
      items={entries}
      mode="VERTICAL_ALTERNATING"
      slideShow
      hideControls
      slideItemDuration={4500}
      slideShowType="slide_from_sides"
      allowDynamicUpdate
      activeItemIndex={null}
      titleDateFormat="MMM YYYY"
      scrollable
    >
      <div className="chrono-icons">
        <img src={upm} alt="Polytechnic University of Madrid" />
        <img src={vicomtech} alt="Vicomtech" />
        <img src={ubx} alt="University of Bordeaux" />
        <img src={uam} alt="Autonomous University of Madrid" />
        <img src={ppcu} alt="Pázmány Péter Catholic University" />
        <img src={swicon} alt="SwiconGroup" />
        <img
          src={bme}
          alt="Budapest University of Technology and Economics"
        />
      </div>
    </Chrono>
  );
};

export default Timeline;