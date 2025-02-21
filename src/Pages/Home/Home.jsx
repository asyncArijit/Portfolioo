import React from "react";
import "./Home.css";
import myImage from "../../assets/my_avatar.avif";
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
import { IoIosArrowDropdownCircle,IoIosArrowDropupCircle  } from "react-icons/io";

function Home() {
  const [activeSection, setActiveSection] = React.useState("about");
  const[isContactOpen,setIsContactOpen]=React.useState(false) 
  const handleChangeContent = (content) => {
    setActiveSection(content);
    console.log(content);
  };

  const navItems = [
    { key: "about", name: "About" },
    { key: "resume", name: "Resume" },
    { key: "portfolio", name: "Portfolio" },
    { key: "blog", name: "Blog" },
    // {key:"contact",name:"Contact"},
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "blog":
        return <Blog />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
    }
  };
  return (
    <>
      <div className="container">
        {/* left part */}
        <div className="left-details">
          <div className="me-short-details">
          <div className="arrow_class" onClick={()=>setIsContactOpen(!isContactOpen)}>
          {/* <IoIosArrowDropdownCircle size={19}     /> */}
        {
          isContactOpen?<IoIosArrowDropupCircle color="#80FF66" className="dropUpDown_clss"   />:<IoIosArrowDropdownCircle className="dropUpDown_clss"    color="yellow" />
        }
          </div>
            <div className="avatar-container">
              <img className="avatar" src={myImage} alt="my avatar" />
              <span className="active-status" title="Available for work!"></span>
            </div>
            <div className="name_profession">
              <span className="myName">Arijit Das</span>
              <span className="myProfession">Full Stack Developer</span>
            </div>
          </div>

          {/* a line */}
          <div className="line"></div>

          {/* contact */}
          {/* <div className="contact-container" style={{  opacity: isContactOpen ? 1 : 0, maxHeight: isContactOpen ? "200px" : "0",overflow: "hidden",transition: "opacity 0.5s ease, max-height 0.5s ease" */}
          <div className={`contact-container ${isContactOpen ? 'open' : 'closed'} `}  >
            <div className="contact-holder">
              <div>
                <MdMarkEmailRead size={19} className="contact-icons" />
              </div>
              <div className="contact-details-text" onClick={() => window.open("mailto:arijitme11@gmail.com")} style={{ cursor: "pointer" }} >
                <span className="contact-text-header">Email</span>
                <span className="contact-text-content">
                  arijitme11@gmail.com
                </span>
              </div>
            </div>
            <div className="contact-holder">
              <div>
                <MdPhoneForwarded size={19} className="contact-icons" />
              </div>
              <div
                className="contact-details-text"
                onClick={() => window.open("tel:+918910742930")}
                style={{ cursor: "pointer" }}
              >
                <span className="contact-text-header">Phone</span>
                <span className="contact-text-content">+91 8910******</span>
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
            <ImLinkedin
            className="icon-class"
              // size={20}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/arijitdas1310",
                  "_blank"
                )
              }
            />
            <VscGithub
               className="icon-class"
               // size={20}
              onClick={() =>
                window.open("https://github.com/arijitdas13105", "_blank")
              }
            />
            <FaSquareXTwitter
               className="icon-class"
               // size={20}
              onClick={() => window.open("https://x.com/AsyncArijit", "_blank")}
            />
            <BiLogoDevTo
               className="icon-class"
               // size={20}
              onClick={() =>
                window.open(
                  "https://dev.to/arijit_das_24c46c6f02b06b",
                  "_blank"
                )
              }
            />
          </div>
        </div>

        {/*right part*/}
        <div className="right-details">
          <div className="headNav">
            <div className="nav-Title-Container">
              {/* <span className="nav-title">{activeSection} </span> */}
              <span className="nav-title">
                {navItems.find((item) => item.key === activeSection)?.name}{" "}
              </span>
            </div>

            <div className="nav-container">
              <ul className="nav-list">
                {navItems.map((item, index) => (
                  <li
                    // className="nav-list-item"
                    className={`nav-list-item ${
                      activeSection === item.key ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => handleChangeContent(item.key)}
                  >
                    {" "}
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* content */}
          <div className="render-content-container">{renderContent()}</div>
        </div>
      </div>
    </>
  );
}

export default Home;
