import React, { Component } from 'react';
import resume from './resumeData';
import { HeaderNav } from '../Header';

class Resume extends Component {

  //toResume = () => {
    //window.location = '/pdf/Resume_Paul_Lee.pdf'
  //};

  render() {
    const skillmessage = resume.skillmessage;

    const work = resume.work.map(function(work){
      return (
        <div key={work.company}>
          {/* Company Name */}
          <h3>{work.company}</h3>

          <p className="info">
            {/* Job Title */}
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
              );
            })}
          </ul>
        </div>
      )
    })

    const education = resume.education.map(function(education) {
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
          {/* <ul className="desc">
            {education.description.map(function(desc) {
              return(
                <li>{desc}</li>
              )
            })}
          </ul> */}

          {/* Other */}
          {/* {education.othertitle.map(function(other) {
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
            );
          })} */}

        </div>
      );
    });


    const skills = resume.skills.map(function(skills){
      const className = 'bar-expand '+ skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{width:skills.level}} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    const courses = resume.courses.map(function(course){
      return(
        {/* <li>
          <div className="course-dot">
            <p className="course-name"> &#8226;</p>
          </div>
          <h4 className="course-number">{course.number}:</h4>
          <p className="course-name">{course.name}</p>
        </li> */}
      );
    });

    return (
      <section id="resume">
        <div id="home"></div>

        <HeaderNav
          navClassName="compNav"
          resume={ true }
          frontpageHandler={ this.props.frontpageHandler }
          aboutHandler={ this.props.aboutHandler }
          resumeHandler={ this.props.resumeHandler }
          projectHandler={ this.props.projectHandler }
        />
        
        {/* Skills Section */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>
            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
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

        {/* Courses Section */}
        {/* <div className="row course">
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
        </div> */}

        {/* Resume Download */}
        {/* <div className="row download">
          <p>
            <a href="javascript:void(0)" onClick={this.toResume} className="button">
              <i className="fa fa-download"></i>Download Resume
            </a>
          </p>
        </div> */}
      
   </section>
    );
  }
}

export default Resume;
