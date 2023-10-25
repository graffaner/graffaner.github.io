import React, { Component } from 'react';

class About extends Component {

  toResume = () => {
    window.location = '/pdf/Resume_Paul_Lee.pdf'
  }

  render() {
    var name = "Lei Chen";
    var profilepic = "images/profilepic.jpg";
    var bio = (
      <p>
        I engineer technological solutions to solve quantitative puzzles and I’m passionate about applying my skills to improving software experience.  My Physics training well prepared me for abstracting real world subjects to mathematical models, architecting digital solutions and crafting software. I'd love to build software to help people one <b>bit</b> at a time.
      </p>
    );
    var street = "";
    var city = "";
    var state = "";
    var zip = "";
    var phone= "";
    var email = "graffaner@gmail.com";
    //var resumeDownload = "https://drive.google.com/file/d/1cm9UuY0VdFVuBkfjotVyGfE_BTl8i1qP/view?usp=sharing";

    return (
      <section id="aboutBrief">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={profilepic} alt="Profile Pic" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          {bio}
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
              {/* <span>{name}</span><br /> */}
              {/* <span>{street}<br />
                    {city} {state}, {zip}
                     </span><br /> */}
              {/* <span>{phone}</span><br /> */}
                <a href={`mailto:${email}`}>
                  <span>
                    {email}
                  </span>
                </a>
              </p>
            </div>
            <div className="columns download">
               {/* <p>
                 <a href="javascript:void(0)" onClick={this.toResume} className="button" download>
                     <i className="fa fa-download"></i>Download Resume
                  </a>
               </p> */}
            </div>
          </div>
        </div>
      </div>

   </section>
    );
  }
}

export default About;
