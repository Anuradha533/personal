import React from 'react';
import './About.css';
import Image from '../../assets/aa-modified.png';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
    <div className="about__info">
        <p className="about__description">
            Hello! I'm Anuradha, currently based in Cleveland, Ohio, originally from Hyderabad, India. I'm a Master's student in Software Engineering at Cleveland State University, where I'm gaining hands-on experience in full-stack development, data analytics, and DevOps practices.<br /><br />
            
            Prior to my graduate studies, I worked as a Software Engineer at DXC Technology, where I developed backend APIs for enterprise insurance applications using Java and Spring Boot. I’m currently working as a Graduate Assistant specializing in web design and CMS development using Drupal, while also contributing to real-world team projects involving admin dashboards, task management platforms, and chatbot solutions.<br /><br />
            
            Fast forward to today, I'm focused on expanding my portfolio with impactful backend and data-driven projects. I enjoy exploring new technologies, solving challenging problems, and working collaboratively in agile environments. I'm passionate about building scalable, efficient systems and continuously leveling up my technical skills to become a well-rounded software engineer.<br /><br />

            Here are a few technologies I’ve been working with recently:
        </p>
        <ul className="about__list">
            <li>Java & Spring Boot (REST APIs, Spring Security, JPA)</li>
            <li>JavaScript & React</li>
            <li>SQL (PostgreSQL, MySQL)</li>
            <li>Python (Pandas, NumPy, Matplotlib)</li>
            <li>Power BI & Tableau</li>
            <li>Docker, Git, Postman</li>
        </ul>
        <button className="btn" onClick={downloadResume}>Download CV</button>
    </div>


                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About