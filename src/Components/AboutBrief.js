import React, { Component } from 'react';

class About extends Component {
  render() {
   var name = "Paul Lee";
   var profilepic = "images/profilepic.jpg";
   var bio = "I'm on a mission to fulfill one of our Alma Mater's core philosophy, \"What Starts Here, Changes the World.\" In preparation to be the catalyst that will create solutions for tomorrow's problems, I have made it a point in my career to pursue a multi-disciplinary background and be a stakeholder in all parts of a process. I am driven to assimilate, invent, and inspire the next-gen technology that will be perennial.";
   var street = "";
   var city = "";
   var state = "";
   var zip = "";
   var phone= "";
   var email = "";
   var resumeDownload = "https://drive.google.com/file/d/1cm9UuY0VdFVuBkfjotVyGfE_BTl8i1qP/view?usp=sharing";

    return (
      <section id="aboutBrief">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button" download> 
                        <i className="fa fa-download"></i>Download Resume
                     </a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
