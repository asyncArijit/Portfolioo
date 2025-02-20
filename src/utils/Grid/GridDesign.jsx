import React from 'react'
import './Grid.css'

function GridDesign({image,index,title,type,decription,link,mode}) {
  const handleGoTo = (link) => {
    console.log(mode)
    
      window.open(link, '_blank')
    
  }
  return (
    <div key={index}
     className="x_grid_item" 
    //  className={`x_grid_item ${mode=='BLOG' ? ' clickable':''}`} 
    onClick={()=>handleGoTo(link)} >
    <div className="x_grid_item_image_container">
      <img className="x_grid_item_image" src={ image} alt="" />
    </div>
    <div>
      <h5 className='x_grid_title'>{ title}</h5>
      <span>{ type}</span>
      <span className='x_grid_desc'>{ decription}</span>
    </div>
  </div>
  )
}

export default GridDesign