import React, { Component } from 'react';
// Import Resume Data
import resume from './resumeData';

class Resume extends Component {

  toResume = () => {
    window.location = '/pdf/Resume_Paul_Lee.pdf'
  }

  render() {
    var resumeDownload = "https://drive.google.com/file/d/1cm9UuY0VdFVuBkfjotVyGfE_BTl8i1qP/view?usp=sharing";
    var skillmessage = resume.skillmessage;
    var education = resume.education.map(function(education){
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} 
            <span>&bull;</span>
            <em className="date">
              {education.graduated}
            </em>
          </p>
          {/* Description */}
          <ul className="desc">
            {education.description.map(function(desc){
              return(
                <li>{desc}</li>
              )
            })
            }
          </ul>
          {/* Other */}
          {education.othertitle.map(function(other){
            var key = other
            var value = education["otherdesc"][key]
            return(
              <div>
                {key}
                <ul className="other">
                  {value.map(function(val){
                    return(
                      <li>{val}</li>
                    )
                  })}
                </ul>
              </div>
            )
          })
          }

        </div>
      )
    })
    var work = resume.work.map(function(work){
      return (
        <div key={work.company}>
          {/* Company Name */}
          <h3>{work.company}</h3>

          <p className="info">
            {/* Job Position */}
            {work.title}
            <span>&bull;</span> 
            {/* Time Period */}
            <em className="date">
              {work.years}
            </em>
          </p>
          {/* Job Description Bullet Points */}
          <ul className="desc">
            {work.description.map(function(desc){
              return(
                <li>{desc}</li>
              )
            })
            }
          </ul>
        </div>
      )
    })
    var skills = resume.skills.map(function(skills){
      var className = 'bar-expand '+skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{width:skills.level}}className={className}></span>
          <em>{skills.name}</em>
        </li>
      )
    })
    var courses = resume.courses.map(function(course){
      return(
        <li>
          <div className="course-dot">
            <p className="course-name"> &#8226;</p>
          </div>
          <h4 className="course-number">{course.number}:</h4>
          <p className="course-name">{course.name}</p>
        </li>
      )
    })

    return (
      <section id="resume">
      
        <nav id="nav-wrap" className="compNav">

          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

          <ul id="nav" className="nav">
            <li><a className="smoothscroll" href="#home" onClick={this.props.frontpageHandler}>Home</a></li>
            <li><a className="smoothscroll" href='#about' onClick={this.props.aboutHandler}>About</a></li>
            <li className="current"><a className="smoothscroll" href='#resume' onClick={this.props.resumeHandler}>Resume</a></li>
            <li><a className="smoothscroll" href="#projects" onClick={this.props.projectHandler}>Projects</a></li>
            <li><a className="smoothscroll" href="#food" onClick={this.props.foodHandler}>Food</a></li>
            
            {/* <li><a className="smoothscroll" href="#contact" onClick={this.props.contactHandler}>Contact</a></li> */}
          </ul>
        </nav>
        
        <div id="home"></div>

{/* Education */}
        <div className="row education">
          <div className="three columns header-col">
              <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  {education}
                </div>
              </div>
          </div>
      </div>

{/* Work Experience */}
      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Experience</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
      </div>

{/* Skills Section */}
      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
    </div>

{/* Courses Section */}
      <div className="row course">

        <div className="three columns header-col">
          <h1><span>Courses</span></h1>
        </div>

        <div className="nine columns main-col">
          <div className="course-container">
            <ul className="course-list">
              {courses}
            </ul>
          </div>
        </div>

      </div>

{/* Resume Download */}
      <div className="row download">
        <p>
          <a href="javascript:void(0)" onClick={this.toResume} className="button">
            <i className="fa fa-download"></i>Download Resume
          </a>
        </p>
      </div>
      
   </section>
    );
  }
}

export default Resume;
