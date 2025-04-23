import React from 'react'
import './Grid.css'

function GridDesign({image,index,title,type,decription,link,mode,technologies}) {
  const handleGoTo = (link) => {
    console.log(mode)
    if(link){
      window.open(link, '_blank')
    
    }
  
  }
  return (
    <div key={index}
    //  className="x_grid_item" 
    className={`x_grid_item ${technologies ? "with-hover" : "no-hover"}`} 
    //  className={`x_grid_item ${mode=='BLOG' ? ' clickable':''}`} 
    onClick={()=>handleGoTo(link)} >
    <div className="x_grid_item_image_container">
      <img className="x_grid_item_image" src={ image} alt="" />
    </div>
    <div className='x_grid_item_content'>
      <h5 className='x_grid_title'>{ title}</h5>
      <span className='x_grid_desc'>{ decription}</span>
      <span className='x_grid_type'>{ type}</span>

    </div>


    {/* Technologies Section (Hidden by default, appears on hover) */}
    
     {/* <div className="x_grid_technologies">
    <div className="technologies_list">
        {technologies?.map((tech, idx) => (
          <div key={idx} className="tech-item">
            {tech.icon}
            <span className='tech_name_text'>{tech.name}</span>
          </div>
        ))}
        </div>
      </div> */}

      {technologies &&(
        <div className="x_grid_technologies">
    <div className="technologies_list">
        {technologies?.map((tech, idx) => (
          <div key={idx} className="tech-item">
            {tech.icon}
            <span className='tech_name_text'>{tech.name}</span>
          </div>
        ))}
        </div>
      </div>
      )}

      {/* <div className="technologies_overlay">
        <div className="technologies_list">
          {technologies?.map((tech, idx) => (
            <div key={idx} className="technology_item">
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div> */}



  </div>
  )
}

export default GridDesign