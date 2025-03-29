import React from 'react'
// import "./Resume.css"
import "./Resumec.css"
import { FaGraduationCap,FaComputer  } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { IoDocumentSharp } from "react-icons/io5";


function Resume() {
  return (
    <div  className="resume-container">
      <section className="timeline">
        <div className="title-wrapper">
            <div className="icon-box">
            <FaGraduationCap size={40} className="md hydrated" color="#80FF66"  />
                {/* <ion-icon name="book-outline" role="img" className="md hydrated" aria-label="book outline"></ion-icon> */}
            </div>
            <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
            <li className="timeline-item">
                <h4 className="h4 timeline-item-title">Indian Institute of Information Technology and Management,Gwalior</h4>
                <p className="timeline-text">Integrated Course,B.Tech(IT)+ MBA</p>
                <span className='education_year'>2019 — 2025</span>
            </li>
            <li className="timeline-item">
                {/* <h4 className="h4 timeline-item-title">Greenland International College</h4>
                <p className="timeline-text">+2 Science</p>
                <span>2015 — 2017</span> */}
            </li>
        </ol>
    </section>
    <section className="timeline">
        <div className="title-wrapper">
            <div className="icon-box">
            <FaLaptopCode size={40} className="md hydrated" color="#80FF66"  />
                {/* <ion-icon name="book-outline" role="img" className="md hydrated" aria-label="book outline"></ion-icon> */}
            </div>
            <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
            <li className="timeline-item">
                <h4 className="h4 timeline-item-title"> Mobile App Developer Intern</h4>
                <p className="timeline-text">CoRider</p>
                {/* <span data-start-date="2024-07-01" data-end-date="present">Aug, 2024 — Present &nbsp; • <span className="duration">7 mos</span> */}
                <span data-start-date="2024-12-01" data-end-date="2024-12-31" className="education_year">December, 2024 &nbsp;  
                    <p className="timeline-text"><i>Bangalore, India</i></p>
                    <ul className="timeline-text">
                        <li>Crafted intuitive and visually appealing UI screens in React Native, elevating user experience and app engagement.</li>
                        <li>Seamlessly integrated UI components with backend services, collaborating across teams to deliver a smooth and dynamic user experience.</li>
            
                    </ul>
                </span>
            </li>
            <li className="timeline-item">
                <h4 className="h4 timeline-item-title"> Full Stack Developer Intern</h4>
                <p className="timeline-text">The Investor Diwan</p>
                {/* <span data-start-date="2022-09-01" data-end-date="2024-08-01">June, 2024 — Sept, 2024 &nbsp; • <span className="duration">1 yr, 11 mos</span></span> */}
                <span data-start-date="2024-06-01" data-end-date="2024-9-31" className="education_year">June, 2024 — Sept, 2024 &nbsp;  </span>
                <p className="timeline-text"><i>Doha, Qatar</i></p>
                <ul className="timeline-text">
                    <li>Designed and implemented a responsive UI for the student panel using React, Redux, and Tailwind CSS, reducing load times by 30% and enhancing accessibility across 30+ pages.</li>
                    <li>Integrated Node.js APIs for seamless data handling, improving backend efficiency and user experience.</li>
                    <li>Collaborated with cross-functional teams to drive project success, consistently delivering milestones 20% ahead of schedule through effective communication and agile practices.</li>
                    <li>Contributed to a scalable and maintainable codebase, ensuring high performance and adaptability for future updates.</li>
                  
                </ul>
            </li>
            <li className="timeline-item">
                <h4 className="h4 timeline-item-title"> Software Developer Intern</h4>
                <p className="timeline-text"> Sehr Technologies</p>
                <span data-start-date="2022-8-01" data-end-date="2022-10-01"  className="education_year">Aug, 2022 — Oct, 2022 &nbsp;  </span>
                <p className="timeline-text"><i>Pune,India</i></p>
                <ul className="timeline-text">
                    <li>Optimized web performance using React.js and Node.js, achieving a 25% reduction in load times and a 20% increase in user session duration.</li>
                    <li>Designed and enhanced client UIs with Tailwind CSS, delivering responsive and visually appealing designs that boosted customer satisfaction by 30%.</li>
                    <li>Contributed to the development of scalable and efficient web applications, ensuring seamless user experiences across devices.</li>
                    <li>Collaborated with the team to implement modern design principles, improving usability and engagement metrics.</li>
                </ul>
            </li>
        </ol>
    </section>
    <div className='download_cv_container'
     onClick={()=>window.open('https://drive.google.com/file/d/1XlGKTXZ-J_5rZEbg4ZAuVSTyBaQK2cEt/view?usp=sharing','_blank')} >
    
    <IoDocumentSharp  className='download_cv_icon' />
      <span className='download_cv_text'> Download CV</span>
    </div>
    </div>
  )
}

export default Resume
