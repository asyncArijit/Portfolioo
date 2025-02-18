import React from "react";
import "./Home.css";
import myImage from "../../assets/my_avatar.jpg";
import { MdMarkEmailRead, MdPhoneForwarded } from "react-icons/md";
import { ImLocation2, ImLinkedin } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoDevTo } from "react-icons/bi";

function Home() {
  const handleChangeContent = ( content ) => {
    console.log(content);
  }
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
                {/* <span className="contact-text-content">arijitmarijitme11arijitme11arijitme11arijitme11e11@gmail.com</span> */}
              </div>
            </div>
            <div className="contact-holder">
              <div>
                <MdPhoneForwarded size={19} className="contact-icons" />
              </div>
              <div className="contact-details-text">
              {/* <span className="contact-text-header">Email</span>
                <span className="contact-text-content">arijitme11@gmail.com</span> */}
              
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
            <ImLinkedin size={20} />
            <VscGithub  size={20}/>
            <FaSquareXTwitter  size={20}/>
            <BiLogoDevTo  size={20}/>
          </div>
        </div>

        {/*right part*/}
        <div className="right-details">
             <div className="headNav" >
                <div className="nav-Title-Container">
                    <span className="nav-title">About</span>
                </div>
                 
                    <div className="nav-container">
                        <ul className="nav-list">
                            <li onClick={()=>handleChangeContent("about")}>About</li>
                            <li>Resume</li>
                            <li>Portfolio</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                 
             </div>

             {/* content */}
                <div></div>
        </div>
      </div>
    </>
  );
}

export default Home;
