import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Sections from "../Sections/Sections";
import Button from "../Button/Button";
import linkedinIcon from "../../images/Header/linkedin-02.svg";
import Menu from "../../images/Header/Menu.svg";
function Header(props) {
  const [isButtonVisible, setButtonVisibility] = useState(true);
  // useEffect to get the width of the screen
  useEffect(() => {
    const handleResize = () => {
      // Update button visibility based on window width
      setButtonVisibility(window.innerWidth > 767);
    };

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once to set initial visibility
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isButtonVisible]); // Add isButtonVisible to the dependency array

  // Linkedin function
  const redirectToLinkedInProfile = () => {
    // Redirect to your LinkedIn profile
    window.location.href =
      "https://www.linkedin.com/in/racha-el-irani-1844b8226/";
  };
  return (
    <div className="headerContainer">
      <Link to="/" className="headerLogo">
        <span onClick={props.HomeSection}>Racha El Irani</span>
      </Link>
      {isButtonVisible ? (
        <div className="headerActions">
          <Sections style="SectionContainer" text="Services" />
          <Sections style="SectionContainer" text="Work" />
          <div className="separator"></div>
          <div className="Linkedin" onClick={redirectToLinkedInProfile}>
            <img src={linkedinIcon} alt="LinkedIn" />
          </div>
          <Button
            name="Get in touch"
            style="activebutton"
            onClick={props.headerbutton}
          />
        </div>
      ) : (
        <div className="Menu">
          <img src={Menu} alt="Menu" />
        </div>
      )}
    </div>
  );
}

export default Header;
