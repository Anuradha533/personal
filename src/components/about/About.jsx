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
  👋 <b>Hey there! I'm Anuradha Lacholla</b><br />
  <b>Java Full-Stack Developer | Web Designer | Drupal Developer </b>
</p>

<p className="about__description">
  I don’t just write code — I build <i>clean, scalable, human-centered digital experiences</i> that look great and work even better.
</p>

<p className="about__description">
  With a Master’s in Software Engineering and hands-on experience in enterprise backends and creative frontends, I love bridging the gap between <i>performance-driven development</i> and <i>accessible, aesthetic design</i>.
</p>

<p className="about__description">
  🧠 <b>What Drives Me:</b>
</p>
<ul className="about__list">
  <li>Solving real-world problems through elegant code.</li>
  <li>Collaborating with passionate, curious minds.</li>
  <li>Exploring new tech—from multithreaded Java backends to React + Tailwind UIs, Exploring Machine Leraning models with kaggle datasets.</li>
</ul>

<p className="about__description">
  🛠️ <b>What I’ve Built So Far:</b>
</p>
<ul className="about__list">
  <li>Enterprise REST APIs using <i>Java</i>, <i>Spring Boot</i>, and <i>JPA</i>.</li>
  <li>Dynamic websites with <i>Drupal CMS</i>, <i>React</i>, and <i>Tailwind CSS</i>.</li>
  <li>Dashboards and data pipelines using <i>Power BI</i>, <i>Python</i>, and <i>SQL</i>.</li>
  <li>Production-grade systems powered by <i>AWS</i>, <i>Docker</i>, <i>Jenkins</i>, and <i>Kubernetes</i>.</li>
</ul>

<p className="about__description">
  🚀 <b>What’s Next:</b>
</p>
<ul className="about__list">
  <li>Joining a team that values <i>clean code, good design, and continuous learning</i>.</li>
  <li>Working on impactful products that make a real difference.</li>
  <li>Growing with a mission-driven company that supports creativity and curiosity.</li>
</ul>

<p className="about__description">
  🧰 <b>My Tech Stack:</b>
</p>
<ul className="about__list">
  <li><b>Languages & Frameworks:</b> Java, Spring Boot, JPA, REST, React, JavaScript, Tailwind CSS, Python (Pandas, NumPy)</li>
  <li><b>Databases:</b> PostgreSQL, MySQL, MariaDB, MongoDB</li>
  <li><b>DevOps & Tools:</b> Docker, Git, GitHub Actions, Jenkins, Postman, Kubernetes</li>
  <li><b>Cloud & Monitoring:</b> AWS (EC2, S3, RDS, CloudWatch)</li>
  <li><b>Visualization & Analytics:</b> Power BI, Tableau</li>
  <li><b>CS Fundamentals:</b> Data Structures, Algorithms, System Design, Design Patterns</li>
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