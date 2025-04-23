import React from "react";
import "./About.css";
import { FaMobileScreenButton, FaDatabase, FaGolang } from "react-icons/fa6";
import {
  FaLaptopCode,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import {
  SiCplusplus,
  SiC,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiApachekafka,
  SiAndroidstudio,
} from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { DiRedis } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { VscServerProcess } from "react-icons/vsc";

function About() {
  const doingSection = [
    {
      title: "Mobile Apps",
      content: "Developing high performance Android and iOS apps with smooth user experiences.",
      icon: <FaMobileScreenButton size={40} />,
    },
    {
      title: "Web Development",
      content: "Building scalable, fast, and interactive web applications with modern frameworks and best practices.",
      icon: <FaLaptopCode size={40} />,
    },
    {
        title: "Backend Development",
        content:
          "Designing efficient and high performance backend systems optimized for scalability and reliability.",
        icon: <FaDatabase size={40} />,
      },

    {
      title: "System Optimization",
      content:
        "Developing robust APIs and optimizing performance to ensure smooth data handling and faster load times.",
      icon: <VscServerProcess size={40} />,
    },
   
  ];

  const skillData = [
    {
      tenhnologyTitle: "Language",
      technologies: [
        { name: "JavaScript", icon: <FaJsSquare color="yellow" size={22} /> },
        { name: "Golang", icon: <FaGolang color="skyblue" size={25} /> },
        { name: "C++", icon: <SiCplusplus color="#00427F" size={25} /> },
      ],
    },

    {
      tenhnologyTitle: "Frontend",
      technologies: [
        { name: "ReactJS", icon: <FaReact color="#61DAFB" size={22} /> },
        {
          name: "React Native",
          icon: <TbBrandReactNative color="#2871C2" size={22} />,
        },
        { name: "HTML", icon: <FaHtml5 color="#E44D26" size={22} /> },
        {
          name: "TailWind CSS",
          icon: <RiTailwindCssFill color="#00B9D8" size={22} />,
        },
        { name: "NextJs", icon: <RiNextjsFill size={25} /> },
        { name: "CSS", icon: <FaCss3Alt color="#2D53E5" size={22} /> },
      ],
    },
    {
      tenhnologyTitle: "Backend",
      technologies: [
        { name: "NodeJS", icon: <TbBrandNodejs color="#79AF69" size={22} /> },
        { name: "ExpressJs", icon: <SiExpress size={22} /> },
        { name: "MongoDB", icon: <SiMongodb color="#199555" size={22} /> },
        { name: "MySQL", icon: <SiMysql color="#E59208" size={25} /> },
        {
          name: "Firebase",
          icon: <IoLogoFirebase color="#FFCD32" size={22} />,
        },
      ],
    },
    {
      tenhnologyTitle: "Technologies",
      technologies: [
        { name: "Redis", icon: <DiRedis color="#D93327" size={25} /> },
        { name: "Kafka", icon: <SiApachekafka color="white" size={22} /> },
        { name: "Docker", icon: <FaDocker color="#1072D8" size={22} /> },
        {
          name: "Android Studio",
          icon: <SiAndroidstudio color="#43DD88" size={22} />,
        },
        { name: "Github", icon: <FaGithub size={22} /> },
      ],
    },
  ];
  return (
    <>
      <div className="about-me-container">
        <p className="about-paragraph">
          A passionate frontend and backend developer from IIIT Gwalior, skilled
          in React.js, React Native, Golang, and Node.js. Experienced in
          building high-performance web and mobile apps, integrating REST APIs,
          and optimizing UI/UX for seamless user experiences. Proficient in
          scalable architectures, databases like MySQL & MongoDB, and
          technologies like Kafka & Redis. Adept at agile collaboration and
          staying ahead with the latest industry trends.
        </p>

        <h3 className="about-headlines">What I'm Doing</h3>
        <div className="grid-container">
          {doingSection.map((item, index) => (
            <>
              <div key={index} className="grid-item">
                <div className="about-icons"> {item.icon} </div>
                <div>
                  <span className="about-item-head">{item.title}</span>
                  <p className="about-item-content"> {item.content} </p>
                </div>
              </div>
            </>
          ))}
        </div>
        <h3 className="about-headlines">Skills</h3>
        <div className="grid-container">
          {/* {
            doingSection.map((item,index)=>(
                <>
                    <div key={index} className="skill_list_items">
                        
                        <span className="technology_title">Frontend</span>
                        <ul className="skill_list">
                            {
                                skillData[1].technologies.map((item,index)=>(
                                    <>
                                    <li key={index} className="skill_list_item">
                                    <span> {item.icon}</span>
                                        <span>{item.name}</span>
                                    </li>
                                    </>
                                ))
                            }
                        </ul>
                    </div>
                </>
            ))
        }
         */}

          {skillData.map((item, index) => (
            <>
              <div key={index} className="skill_list_items">
                <span className="technology_title">
                  {item.tenhnologyTitle}{" "}
                </span>
                <ul className="skill_list">
                  {item.technologies.map((item, index) => (
                    <>
                      <li key={index} className="skill_list_item">
                        <span className="skill_list_item_icon">
                          
                          {item.icon}
                        </span>
                        <span>{item.name}</span>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
