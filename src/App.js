import "./App.css";
import Header from "./Components/Header/Header";
import Button from "./Components/Button/Button";
import arrow from "./images/Landing/arrow.svg";
import LandingImage from "./images/Landing/homepageimage.svg";
import design1 from "./images/servicesImages/design1.png";
import design2 from "./images/servicesImages/design2.png";
import mobile from "./images/servicesImages/mobile.png";
import web from "./images/servicesImages/web.png";
import Tag from "./Components/Tag/tag";
import Project from "./Components/project/project";
import Bex from "./images/Work/bex.png";
import zaky from "./images/Work/zaky.png";
import mywebsite from "./images/Work/mywebsite.png";
import Says from "./Components/says/says";
import johnny from "./images/says/johnny.jpeg";
import InputForm from "./Components/InputForm/InputForm";
import ContactusImage from "./images/Form/contactUs.png";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="">
      <Header />
      <div className="Cointaner">
        {/*Start of Landing Page*/}
        <div className="Landingpage">
          <div className="LandingTextContainer">
            <span className="Title">Where Ideas Come to Life</span>
            <span className="Description">
              I’m Racha, and I am a Product Designer and Developer. I love
              transforming ideas into realities by designing and building them.
            </span>
            <div className="LandingActionsContainer">
              <Button
                name="Check my latest work"
                style="activebutton"
                // onClick={scrollToWork}
              />
              <Button
                name="Get in touch"
                style="Buttonsecondary"
                icon={arrow}
                // onClick={scrollToContact}
              />
            </div>
          </div>
          <div className="LandingImage">
            <img
              src={LandingImage}
              alt="LandingImage"
              width="100%"
              height="100%"
            />
          </div>
        </div>

        {/*End of Landing Page*/}

        {/*Start of Services Page*/}
        <div className="ServicesCointainer">
          <div className="ImageContainer">
            <div className="part1">
              <img src={design1} alt="design1" width="60%" height="auto" />
              {/* <div style={{width:"24px"}}></div> */}
              <img src={web} alt="web" width="35%" height="auto" />
            </div>
            <div className="part1">
              <img src={design2} alt="web" width="35%" height="auto" />
              <img src={mobile} alt="design1" width="60%" height="auto" />
            </div>
          </div>
          <div className="ServicesTextCointainer">
            <span className="Title">Designing Dreams, Building Realities</span>
            <span className="Description">
              I provide a diverse set of services to cater to your digital
              requirements. Whether it's improving user experiences through
              UX/UI design, crafting compelling websites, or developing mobile
              applications, I've got you covered. My mission is to turn your
              ideas into practical, user-friendly, and visually appealing
              digital solutions that resonate with your targeted audience. Let's
              work together to bring your digital vision to fruition.
            </span>
            <div className="tagdiv">
              <div className="tagdiv1">
                <Tag text="Product Design" style="default" />
                <Tag text="Web Development" style="default" />
              </div>
              <div className="tagdiv2">
                <Tag text="Mobile Development" style="default" />
              </div>
            </div>
          </div>
        </div>
        {/*End of Services Page*/}
        {/*Start of Work Page*/}
        <div className="WorkContainer">
          <span className="Title">Ideas That Has Become A Reality.</span>
          <div className="WorkProjectContainer">
            <Project
              title="BEX Business Portal"
              desc="BEX streamlines expense management for businesses by centralizing receipts, invoices, and financial documents."
              image={Bex}
              style="default"
            />
            <Project
              title="zaky Mobile App"
              desc="zaky is a digital wallet that helps you transact without a bank account. Safely store, pay & send money with a click!"
              image={zaky}
              style="default"
            />
            <Project
              title="My Portfolio"
              desc="My Portfolio: A showcase of my work, skills, and accomplishments."
              image={mywebsite}
              style="dev"
            />
          </div>
        </div>
        {/*End of Work Page*/}
        {/*Start of Saying Page*/}
        <div className="SayContainer">
          <div className="SayTextContainer">
            {" "}
            <span className="Title">What they’re saying</span>
          </div>

          <div className="AllSaysContainer">
            <Says
              left="true"
              image={johnny}
              name="Johnny Bou Malhab"
              desc="Team Lead"
              text="Racha seamlessly created and integrated complex design systems into user-friendly solutions while creating over 10 products in a year, considering business and user needs."
            />
            <Says
              image={johnny}
              name="Johnny Bou Malhab"
              desc="Team Lead"
              text="Racha seamlessly created and integrated complex design systems into user-friendly solutions while creating over 10 products in a year, considering business and user needs."
            />
          </div>
        </div>
        {/*End of Saying Page*/}
        {/*Start of Form Page*/}
        <div className="Landingpage">
        <InputForm/>
        <div className="FormImage">
        <img
              src={ContactusImage}
              alt="ContactusImage"
              width="100%"
              height="100%"
            />
        </div>
        </div>
      
        {/*End of Form Page*/}
   
      </div>
      <Footer/>
    </div>
  );
}

export default App;
