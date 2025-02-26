import React, { useState } from "react";
import avatar from "../../assets/my_avatar.avif";
import auctionx from "../../assets/auctionx.avif";
import caloriemate from "../../assets/caloriemate.avif";
import netflixGPT from "../../assets/netflixGPT.avif";
import "./Portfolio.css";
import GridDesign from "../../utils/Grid/GridDesign";


import {   FaGolang } from "react-icons/fa6";
import {
   FaReact,
  
} from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { RiTailwindCssFill,   } from "react-icons/ri";
import {
   SiMysql,
  SiMongodb,
  SiApachekafka,
 } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { DiRedis } from "react-icons/di";
 
import { AiFillOpenAI } from "react-icons/ai";
import { RiGeminiFill } from "react-icons/ri";



function Portfolio() {
  const [selectedType, setSelectedType] = useState("All");
  const projects = [
    {
      title: "ActionX",
      description:'Online Auction Marketplace',
      link: "https://auctionxa.vercel.app/",
      type: "web development",
      image: auctionx,
       technologies: [
              { name: "React", icon: <FaReact color="#61DAFB" size={20} /> },
              { name: "Golang", icon: <FaGolang color="skyblue" size={25} /> },
              { name: "MySQL", icon: <SiMysql color="#E59208" size={25} /> },
              { name: "Redis", icon: <DiRedis color="#D93327" size={25} /> },
              { name: "Kafka", icon: <SiApachekafka color="white" size={20} /> },
                      
            ],
    },
    {
      title: "Netflix GPT",
      description:'AI Movie Recommender ',
      link: "https://netflixgpt-new.vercel.app",
      type: "web development",
      image: netflixGPT,
      technologies: [
        { name: "React", icon: <FaReact color="#61DAFB" size={20} />},
        { name: "TailWind CSS", icon: <RiTailwindCssFill  color="#00B9D8"   size={25} /> },
        { name: "OpenAI API", icon: <AiFillOpenAI   size={25} /> },
         
      ],
    },
    { title: "CalorieMate", type: "Mobile Application", image: caloriemate,
      description:'AI Fitness Tracker App for Fitness Enthusiasts',
    technologies: [
      { name: "React Native", icon: <TbBrandReactNative color="#00B9D8" size={25} /> },
      { name: "MongoDB", icon: <SiMongodb  color="#199555"   size={25} /> },
      { name: "NodeJS", icon: <TbBrandNodejs color="#79AF69" size={25} /> },
      { name: "Google Gemini", icon: <RiGeminiFill color="#C3677F" size={25} /> },
    ]},
  ];

  const uniqueTypes = ["All", ...new Set(projects.map((item) => item.type))];
  const typeDisplatName = (type) => {
    switch (type) {
      case "web development":
        return "Web Development";
      case "Mobile Application":
        return "Apps";
      case "All":
        return "All";
      default:
        return type; // Fallback to original name
    }
  };
  const handleFilter = (type) => {
    setSelectedType(type);
  };

  const filterdProjects =
    selectedType === "All"
      ? projects
      : projects.filter((item) => item.type === selectedType);
  return (
    <>
      <div className="portfolio_container">
        <ul className="portfolio_category_ul">
          {uniqueTypes.map((type, index) => (
            <>
              <li
                className={`portfolio_category_item ${
                  selectedType === type ? "active" : ""
                }`}
                key={index}
                onClick={() => handleFilter(type)}
              >
                {" "}
                {typeDisplatName(type)}{" "}
              </li>
            </>
          ))}
        </ul>
        <div className="portfolio_grid_container">
          {/* {projects.map((item, index) => (
          <>
            <div key={index} className="portfolio_grid_item">
              <div className="portfolio_grid_item_image_container">
                <img className="portfolio_grid_item_image" src={item.image} alt="" />
              </div>
              <div>
                <h5>{item.title}</h5>
                <span>{item.type}</span>
              </div>
            </div>
          </>
        ))} */}

          {filterdProjects.length > 0 ? (
            filterdProjects.map((item, index) => (
              <>
                {/* <div key={index} className="portfolio_grid_item">
              <div className="portfolio_grid_item_image_container">
                <img className="portfolio_grid_item_image" src={item.image} alt="" />
              </div>
              <div>
                <h5>{item.title}</h5>
                <span>{item.type}</span>
              </div>
            </div> */}

                <GridDesign
                  index={index}
                  title={item.title}
                  type={item.type}
                  image={item.image}
                  link={item.link}
                  technologies={item.technologies}
                  decription={item.description}
                />
              </>
            ))
          ) : (
            <p>No Projects Found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
