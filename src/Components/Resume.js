import React, { Component } from 'react';

class Resume extends Component {

  resume = {
    "skillmessage":"",
    "education":[
      {
        "school":"University of Texas at Austin",
        "degree":"B.S. Mechanical Engineering Honors",
        "graduated":"May 2018, GPA: 3.92",
        "description":[
          "Specialized and earned a certificate in Mechatronics",
          "Engineering Honors Program: Honors Thesis - Safety Risks with DIY Electric Rideables",
          "Clubs & Activities: Tau Beta Pi, ASME"
        ]
      }
    ],
    "work":[
      {
        "company":"Stealth Mode Start Up",
        "title":"VP of Engineering",
        "years":"Sept 2019 - Present",
        "description":[
          "Developing innovative safety solutions for battery energy storage devices"
        ]
      },
      {
        "company":"Tesla, Inc.",
        "title":"Quality Data Science & Systems",
        "years":"Jun 2019 - Sept 2019",
        "description":[
          "Was in transit for a formal position as an Associate Data Scientist",
          "Developed micro-web applications in Python Flask to promote efficient communication of critical information"
        ]
      },
      {
        "company":"Tesla, Inc.",
        "title":"Quality Engineering Technician II",
        "years":"Jun 2018 - Jun 2019",
        "description":[
          "Employee of the Quarter - Q3 2018",
          "Saved the company $10.5M dollars on a single project"
        ]
      },
      {
        "company":"UT Fire Research",
        "title":"Undergraduate Research Assistant",
        "years":"Feb 2017 - May 2018",
        "description":[
          "Lead Undergraduate student. Developed electro-mechanical systems for testing facilities"
        ]
      },
      {
        "company":"Applied Research Laboratories",
        "title":"Student Intern",
        "years":"Mar 2016 - Dec 2016",
        "description":[
          "Performed experiments and created drawings compliant with GD&T"
        ]
      }
    ],
    "skills":[
      {
        "name":"Mechanical Engineering",
        "level":"80%"
      },
      {
        "name":"Python",
        "level":"70%"
      },
      {
        "name":"MySQL",
        "level":"70%"
      }
    ]
  }

  render() {
    var skillmessage = this.resume.skillmessage;
    var education = this.resume.education.map(function(education){
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
        </div>
      )
    })
    var work = this.resume.work.map(function(work){
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> 
            <em className="date">
              {work.years}
            </em>
          </p>
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
    var skills = this.resume.skills.map(function(skills){
      var className = 'bar-expand '+skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{width:skills.level}}className={className}></span>
          <em>{skills.name}</em>
        </li>
      )
    })

    return (
      <section id="resume">
      
        <nav id="nav-wrap">

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
            <h1><span>Work</span></h1>
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

   </section>
    );
  }
}

export default Resume;
