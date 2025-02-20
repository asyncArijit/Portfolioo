import React from "react";
import "./About.css";
import { FaMobileScreenButton,FaDatabase,FaGolang   } from "react-icons/fa6";
import { FaLaptopCode,FaReact ,FaHtml5,FaCss3Alt , FaJsSquare ,FaDocker ,FaGithub  } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { RiTailwindCssFill,RiNextjsFill  } from "react-icons/ri";
import { SiCplusplus,SiC,SiExpress,SiMysql ,SiMongodb ,SiApachekafka ,SiAndroidstudio   } from "react-icons/si";
import { TbBrandNodejs,  } from "react-icons/tb";
import { DiRedis } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";


function About() {
    const doingSection=[
        {title:"Mobile Apps",content:"Professional development of applications for Android and ios.",icon:<FaMobileScreenButton size={40} />},
        {title:"Web Development",content:"High-quality development of sites at the professional level.",icon:<FaLaptopCode size={40}/>},
        {title:"UI/UX Design",content:"design icon UI/UX Design The most modern and high-quality design made at a professional level.",icon:<FaLaptopCode size={40}/>},
        {title:"Backend Development",content:"High-performance backend services designed for scalability and seamless user experience.",icon:<FaDatabase size={40}/>}
    ]

    const skillData=[
        {tenhnologyTitle:'Language',
            technologies:[{name:'JavaScript',icon:<FaJsSquare  color="yellow" size={22} /> },
                {name:'Golang',icon:<FaGolang color="skyblue" size={25} /> },
                {name:'C++',icon:<SiCplusplus color="#00427F" size={25} /> },
                
            ]},

        {tenhnologyTitle:'Frontend',
        technologies:[{name:'ReactJS',icon:<FaReact color="#61DAFB" size={22} /> },
            {name:'React Native',icon:<TbBrandReactNative color="#2871C2"  size={22} /> },
            {name:'HTML',icon:<FaHtml5 color="#E44D26"  size={22} /> },
            {name:'TailWind CSS',icon:<RiTailwindCssFill color="#00B9D8" size={22} /> },
            {name:'NextJs',icon:<RiNextjsFill     size={25} /> },
            {name:'CSS',icon:<FaCss3Alt color="#2D53E5"  size={22} /> },
        ]},
        {tenhnologyTitle:'Backend',
        technologies:[{name:'NodeJS',icon:<TbBrandNodejs  color="#79AF69" size={22} /> },
            {name:'ExpressJs',icon:<SiExpress    size={22} /> },
            {name:'MongoDB',icon:<SiMongodb  color="#199555" size={22} /> },
            {name:'MySQL',icon:<SiMysql color="#E59208"  size={25} /> },
            {name:'Firebase',icon:<IoLogoFirebase color="#FFCD32"  size={22} /> },
         ]},
        {
            tenhnologyTitle:'Technologies', technologies:[
                {name:'Redis',icon:<DiRedis  color="#D93327"  size={25} />},
                {name:'Kafka',icon:<SiApachekafka color="white"  size={22} />},
                {name:'Docker',icon:<FaDocker color="#1072D8"  size={22} />},
                 {name:'Android Studio',icon:<SiAndroidstudio color="#43DD88" size={22} />},
                 {name:'Github',icon:<FaGithub  size={22} />},
                
            ]
        }
    ]
  return (
    <>
      <div className="about-me-container">
        <p className="about-paragraph" >
          A passionate Flutter developer with strong expertise in cross-platform
          apps, REST APIs, UI/UX, widgets, and state management solutions.
          Proven track record in delivering cutting-edge solutions, including
          API integration, third-party libraries, and performance optimization.
          Adept at debugging to ensure high-quality, responsive apps and An
          agile collaborator committed to staying current with industry trends.
        </p>

        <h3 className="about-headlines">What I'm Doing</h3>
        <div className="grid-container">
        {
            doingSection.map((item,index)=>(
                <>
                    <div key={index} className="grid-item">
                        <div className="about-icons"> {item.icon} </div>
                        <div>
                            <span className="about-item-head">{item.title}</span>
                            <p className="about-item-content"> {item.content} </p>
                        </div>
                    </div>
                </>
            ))
        }
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

         {
            skillData.map((item,index)=>(
                <>
                    <div key={index} className="skill_list_items">
                        
                        <span className="technology_title">{item.tenhnologyTitle} </span>
                        <ul className="skill_list">
                            {
                                item.technologies.map((item,index)=>(
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

           </div>
      </div>
    </>
  );
}

export default About;
