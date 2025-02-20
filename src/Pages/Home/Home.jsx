
import React from "react";
import  "./Home.css";
import myImage from "../../assets/my_avatar.jpg";
import { MdMarkEmailRead, MdPhoneForwarded } from "react-icons/md";
import { ImLocation2, ImLinkedin } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoDevTo } from "react-icons/bi";
import About from "../../Components/About/About";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Blog from "../../Components/Blog/Blog";
import Contact from "../../Components/Contact/Contact";
import Resume from "../../Components/Resume/Resume";

function Home() {
  const [activeSection, setActiveSection] = React.useState("about");
  const handleChangeContent = ( content ) => {
    setActiveSection(content);
    console.log(content);
  }

  const navItems=[
    {key:"about",name:"About"},
    {key:"portfolio",name:"Portfolio"},
    {key:"blog",name:"Blog"},
    {key:"contact",name:"Contact"},
    {key:"resume",name:"Resume"}

  ]

  const  renderContent = () => {
    switch(activeSection){
      case "about":
        return <About />
      case "portfolio":
        return <Portfolio />
      case "blog":
        return <Blog />
      case "contact":
        return <Contact />
      case "resume":
        return <Resume />  
    }
  };
  return (
    <>
      <div className="container">
        {/* left part */}
        <div className="left-details">
          <div className="me-short-details">
            <div className="avatar-container">
              <img className="avatar" src={myImage} alt="my avatar" />
            </div>

            <span className="myName">Arijit Das</span>
            <span className="myProfession">full Stack Developer</span>
          </div>

          {/* a line */}
          <div className="line"></div>

          {/* contact */}
          <div className="contact-container">
            <div className="contact-holder">
              <div>
                <MdMarkEmailRead size={19} className="contact-icons" />
              </div>
              <div className="contact-details-text">
                <span className="contact-text-header">Email</span>
                <span className="contact-text-content">arijitme11@gmail.com</span>
               </div>
            </div>
            <div className="contact-holder">
              <div>
                <MdPhoneForwarded size={19} className="contact-icons" />
              </div>
              <div className="contact-details-text">
               
              
                <span className="contact-text-header">Phone</span>
                <span className="contact-text-content">+91 8910742930</span>
              </div>
            </div>
            <div className="contact-holder">
              <div>
                <ImLocation2 size={19} className="contact-icons" />
              </div>
              <div className="contact-details-text">
                <span className="contact-text-header">Location</span>
                <span className="contact-text-content">India</span>
              </div>
            </div>
             
          </div>

          {/* socal media */}
          <div className="social-media-container">
            <ImLinkedin size={20} onClick={()=>window.open("https://www.linkedin.com/in/arijitdas1310",'_blank')} />
            <VscGithub  size={20} onClick={()=>window.open("https://github.com/arijitdas13105",'_blank')}/>
            <FaSquareXTwitter  size={20} onClick={()=>window.open("https://x.com/AsyncArijit",'_blank')}/>
            <BiLogoDevTo  size={20} onClick={()=>window.open("https://dev.to/arijit_das_24c46c6f02b06b",'_blank')}/>
          </div>
        </div>

        {/*right part*/}
        <div className="right-details">
             <div className="headNav" >
                <div className="nav-Title-Container">
                    {/* <span className="nav-title">{activeSection} </span> */}
                    <span className="nav-title">{navItems.find((item) => item.key === activeSection)?.name} </span>
                </div>
                 
                    <div className="nav-container">
                        <ul className="nav-list">
                            
                            {
                              navItems.map((item,index)=>(
                                <li 
                                // className="nav-list-item" 
                                className={`nav-list-item ${activeSection===item.key?"active":""}`}
                                key={index} onClick={()=>handleChangeContent(item.key)}> {item.name}
                                </li>
                              ))
                            }
                        </ul>
                    </div>
                 
             </div>

             {/* content */}
                <div className="render-content-container">
                    {renderContent()}
                </div>
        </div>
      </div>
    </>
  );
}

export default Home;
