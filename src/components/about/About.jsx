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
        👋 <b> Hi, I’m Anuradha  </b>  <br></br>
Java Full-Stack Developer | Drupal Developer
<br></br>
Creative problem-solver passionate about building smart, scalable, and beautifully crafted digital solutions.
<br></br>

🌱 More About Me: <br></br>
I recently graduated with a Master’s in Software Engineering from Cleveland State University and am currently seeking full-time opportunities that align with my passion for backend development, intuitive frontend design, and innovative problem-solving.
Originally from Hyderabad, India, I’ve gained hands-on experience through my roles at DXC Technology and as a Graduate Assistant at CSU. At DXC, I built and maintained backend APIs for enterprise applications using Java and Spring Boot. At CSU, I specialized in Drupal-based web design and contributed to impactful team projects involving dashboards, admin panels, and chatbot interfaces.

Now, I'm eager to join a forward-thinking team where I can continue to learn, contribute, and grow, while pushing the boundaries of creativity and technology in every project I take on.
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