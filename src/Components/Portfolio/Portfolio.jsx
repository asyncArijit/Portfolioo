import React, { useState } from "react";
import avatar from "../../assets/my_avatar.jpg";
import "./Portfolio.css";
import GridDesign from "../../utils/Grid/GridDesign";
function Portfolio() {
  const [selectedType,setSelectedType]=useState('All')
  const projects = [
    { title: "ActionX",link:'https://auctionxa.vercel.app/', type: "web development", image:   avatar   },
    { title: "Netflix GPT",link:'https://netflix-gpts-o6dp.vercel.app ',  type: "web development", image:   avatar  },
    { title: "CalorieMate"   ,type: "Mobile Application", image:   avatar   },
  ];

  const uniqueTypes=["All",...new Set(projects.map((item)=>item.type))]
  const typeDisplatName=(type)=>{
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
  }
  const handleFilter=(type)=>{
    setSelectedType(type)
  }

  const filterdProjects=selectedType==='All'?projects:projects.filter((item)=>item.type===selectedType)
  return (
    <>
    <div className="portfolio_container">
    <ul className="portfolio_category_ul">
    {uniqueTypes.map((type,index)=>(
      <>
        <li className={`portfolio_category_item ${
              selectedType === type ? "active" : ""
            }`}
            key={index} onClick={()=>handleFilter(type)} > {typeDisplatName(type)}  </li>
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

          {
            filterdProjects.length>0?(
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


            <GridDesign index={index} title={item.title} type={item.type} image={item.image} />
          </>
        ))
            ):(
              <p>No Projects Found</p>
            )
          }

      </div>
      </div>
    </>
  );
}

export default Portfolio;
