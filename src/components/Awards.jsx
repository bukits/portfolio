import React from 'react';
import '../styles/awards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAward,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';

const awards = [
  {
    title: 'Selected Alumni Presenter — IPCVAI Days 2026',
    location: 'Bordeaux, France',
    date: 'June 2026',
    description:
      'Selected as an alumni presenter of my PhD research for IPCVAI Days 2026.',
    icon: faAward,
  },
  {
    title: 'Image Processing and Computer Vision Excellence Scholarship',
    location: 'Budapest, Hungary',
    date: 'September 2022 – June 2024',
    description:
      'Selected for the IPCV Excellence Scholarship from more than 1,000 applicants worldwide.',
    icon: faUserGraduate,
  },
  {
    title: 'Erasmus+ Scholarship',
    location: 'Bordeaux, France',
    date: 'September 2023 – January 2024',
    description:
      'Awarded an Erasmus+ Scholarship for an academic exchange semester in Bordeaux.',
    icon: faUserGraduate,
  },
  {
    title: 'Erasmus+ Scholarship',
    location: 'Madrid, Spain',
    date: 'January 2023 – June 2023',
    description:
      'Awarded an Erasmus+ Scholarship for an academic exchange semester in Madrid.',
    icon: faUserGraduate,
  },
  {
    title: 'Integrated MSc Scholarship',
    location: 'Budapest, Hungary',
    date: 'September 2017 – June 2021',
    description:
      'Selected for a high-achieving cohort and maintained a GPA of 4.0/5.0 throughout the program.',
    icon: faUserGraduate,
  },
];

const Awards = () => {
  return (
    <div className="awards-div-main">
      <div className="awards-text">
        <div>
          {awards.map((award) => (
            <div
              className="awards-item"
              key={`${award.title}-${award.location}-${award.date}`}
            >
              <div style={{ width: '40px' }}>
                <FontAwesomeIcon icon={award.icon} />
              </div>

              <div>
                <span className="award-text-header">
                  {award.title}
                </span>

                <br />

                <span className="award-date">
                  {award.date} · {award.location}
                </span>

                <br />

                {award.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;