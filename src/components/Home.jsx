import React from 'react';
import '../styles/home.css';
import AcademicBar from './AcademicBar';
import introImage from '../assets/introImage.png';
import Skills from './Skills';
import Projects from './Projects';
import Timeline from "./Timeline";
import Awards from './Awards';
import ResearchCard from './ResearchCard';
import Contact from './Contact';

const Home = () => {

        const heroText = [
                <div key="hero-text">
                <p>
                Researcher at Vicomtech in Donostia–San Sebastián&nbsp; | &nbsp;PhD
                Candidate at Universidad Politécnica de Madrid&nbsp; | &nbsp;Erasmus
                Mundus MSc in Image Processing and Computer Vision (IPCV)
                </p>

                <div className="academic-hero">
                <AcademicBar />
                </div>
                </div>,
                ];

        

        const introText = [
                <p style={{ marginLeft: '10%', marginRight: 0 }}>
                        I am currently a <b>Researcher at Vicomtech</b> in Donostia–San Sebastián and
                        an <b>Industrial PhD candidate in Communication Technologies and Systems</b> at
                        the <b>Polytechnic University of Madrid</b>.
                        <br /><br />

                        My doctoral research focuses on AI-driven pipelines for creating virtual
                        environments, humans, and objects from their real-world counterparts. My work
                        combines multimodal scene understanding, computer vision, 3D reconstruction,
                        and digital representation to support immersive and interactive media
                        applications.
                        <br /><br />

                        I joined <b>Vicomtech</b> in February 2024 as a Research Intern, later
                        progressed to Research Assistant, and currently work as a Researcher in the
                        Digital Media Department. Within the Interactive Media research line, I
                        investigate methods for integrating real-world physical objects into immersive
                        XR experiences.
                        <br /><br />

                        My research has included volumetric capture, 3D scene reconstruction, and
                        Gaussian Splatting. I have developed and extended Gaussian Splatting methods
                        to improve the accuracy and efficiency of volumetric rendering while reducing
                        computational complexity.
                        <br /><br />

                        I hold an <b>Erasmus Mundus Joint MSc in Image Processing and Computer Vision</b>,
                        completed across <b>Pázmány Péter Catholic University</b> in Hungary, the
                        <b> Autonomous University of Madrid</b> in Spain, and the
                        <b> University of Bordeaux</b> in France.
                        <br /><br />

                        I also hold a <b>BSc in Computer Science Engineering</b> from the
                        <b> Budapest University of Technology and Economics</b>. Before moving into
                        research, I worked as a <b>Software Engineer at SwiconGroup</b>, where I
                        developed backend and frontend features for contract management, HR workflow,
                        and sales management applications using Node.js, TypeScript, Angular, and Java.
                        <br /><br />

                        My main interests lie at the intersection of computer vision, artificial
                        intelligence, 3D reconstruction, immersive technologies, and extended reality.
                        I am particularly interested in transforming real-world environments and
                        objects into accurate, efficient, and interactive digital representations.
                        </p>
        ];

 return (
    <div className='main-div-home'>
        <div id='home'>
                <div className='hero'>
                        {/* <HeroImage /> */}
                        <h1>Tamás Bukits</h1>
                        {heroText}
                </div>
        </div>

        <div id='about' className='sections-home'/>                            
        <div className='about'>
                <h1 className='home-headers'>Introduction</h1>
                <div className='intro-grid'>
                        <div className='intro-img-container'>
                                <img src={introImage} alt='self-intro' className='intro-image'/>
                        </div>
                        <div className='intro-text-container'>
                                {introText}  
                        </div>
                </div>
                <h3>Research Interests</h3>
                <div className='research-card-section'>
                <ResearchCard title="3D Reconstruction" />
                <ResearchCard title="Gaussian Splatting" />
                <ResearchCard title="3D Avatar Reconstruction" />
                <ResearchCard title="Virtual Environments" />
                <ResearchCard title="Computer Graphics" />
                <ResearchCard title="Deep Learning" />
                <ResearchCard title="Computer Vision" />
                </div>
        </div>

        <div id='skills' className='sections-home'/>                            
        <div className='skills-main'>
                <h1 className='home-headers'>Technical Expertise</h1>
                <Skills />
        </div>

        <div id='timeline' className='sections-home'/>                            
        <div className='timeline-main'>
                
        <h1 className='home-headers'>My journey so far</h1>
        <Timeline
                mode="VERTICAL_ALTERNATING"
                theme={{
                primaryColor: "#000000",
                secondaryColor: "#ffffff",
                }}
        />
        </div>

        <div id='projects' className='sections-home'/>                            
        <div style={{maxWidth: '100vw'}}>
                <h1 className='home-headers'>Research Projects</h1>
                <div className='projects-main'>
                        <Projects />
                </div>
                
                
        </div>

        <div id='awards' className='sections-home'/>                            
        <div className='awards-main'>
                <h1 className='home-headers'>Honors and Awards</h1>
                <Awards />
        </div>

        <div id='contact' className='sections-home'/>                            
        <div className='contact-main'>
                <h1 className='home-headers'>Contact me</h1>
                <Contact />
        </div>
    </div>
 ) 
};

export default Home;