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
          "Engineering Honors Program: Honors Thesis - Safety Risks with DIY Electric Rideables",
          "Accolades: Mechatronics Certificate, Engineer-in-Training (EIT 64856)",
          "Clubs & Activities: Tau Beta Pi, ASME"
        ]
      }
    ],
    "work":[
      {
        "company":"Stealth Mode Start Up",
        "title":"Engineer #1 | VP of Engineering",
        "years":"Sept 2019 - Present",
        "description":[
          "Developing innovative safety solutions for renewable energy storage systems",
          "Seeded by the NSF SBIR/STTR grant"
        ]
      },
      {
        "company":"Tesla, Inc.",
        "title":"Quality Data Science & Systems",
        "years":"Jun 2019 - Sept 2019",
        "description":[
          "Was in transit for a formal position as an Associate Data Scientist",
          "Developed micro-web applications in Python Flask to promote efficient communication of critical information",
          "Analyzed quality metrics in compliance with Tesla's Quality Management System (QMS)",
          "Utilized Confluence REST API's to autonomously maintain information",
          "Other: Offered formal position as an Associate Process Engineer for the Model 3 Drive Unit"
        ]
      },
      {
        "company":"Tesla, Inc.",
        "title":"Quality Engineering Technician II",
        "years":"Jun 2018 - Jun 2019",
        "description":[
          "Employee of the Quarter - Q3 2018",
          "Successfully saved the company $10.5M in the third and fourth quarters of 2018 by coordinating with an engineering team and senior managers to develop and implement a new production line",
          "Deployed stand-alone applications in Java, Python, and MySQL as serviceable quality tools",
          "Maximized efficiency and quality in accordance with the company’s standards by utilizing root-cause analysis and lean manufacturing methodologies in the Model 3 battery module production"
        ]
      },
      {
        "company":"UT Fire Research",
        "title":"Undergraduate Research Assistant",
        "years":"Feb 2017 - May 2018",
        "description":[
          "Contributed to research for the automation of a testing facility that simulated indoor flashover fires",
          "Acted as the leader for a team of undergraduate students, providing mentorship and coaching where needed",
          "Conducted comprehensive research into the lithium-ion battery degredation"
        ]
      },
      {
        "company":"Applied Research Laboratories",
        "title":"Student Intern",
        "years":"Mar 2016 - Dec 2016",
        "description":[
          "Expedited the full-cycle of system development, designing, commissioning, fabricating, and assembly of experimental test systems according to exact specifications by utilizing an extensive knowledge of CAD software",
          "Developed new parts and modified existing parts in PTC Creo CAD software to enhance functionality",
          "Created accurate engineering drawings by leveraging Geometric Dimensioning and Tolerancing practices",
          "Maintained an attentive, professional attitude while communicating with vendors to commission custom parts",
          "Supervised the packaging, shipping, and receiving of custom and original equipment parts"
        ]
      }
    ],
    "skills":[
      {
        "name":"Mechanical Engineering",
        "level":"80%"
      },
      {
        "name":"Solidworks",
        "level":"70%"
      },
      {
        "name":"Python",
        "level":"70%"
      },
      {
        "name":"MySQL",
        "level":"70%"
      },
      {
        "name":"Raspberry Pi",
        "level":"70%"
      },
      {
        "name":"Java",
        "level":"65%"
      },
      {
        "name":"MATLAB",
        "level":"65%"
      },
      {
        "name":"PTC Creo",
        "level":"60%"
      },
      {
        "name":"LabVIEW",
        "level":"60%"
      },
      {
        "name":"React JS",
        "level":"30%"
      }
    ],
    "courses":[
      {
        "number":"ME344",
        "name":"Dynamic Systems & Controls"
      },
      {
        "number":"ME379M",
        "name":"Theory/Design of Mechanical Measurements"
      },
      {
        "number":"ME348D",
        "name":"Mechatronics II"
      },
      {
        "number":"ME348C",
        "name":"Mechatronics I"
      },
      {
        "number":"ME340",
        "name":"Mechatronics (Undergrad)"
      },
      {
        "number":"ME679",
        "name":"Undergraduate Honors Thesis"
      },
      {
        "number":"ME339",
        "name":"Heat Transfer"
      },
      {
        "number":"ME334",
        "name":"Materials Engineering"
      },
      {
        "number":"ME338",
        "name":"Machine Elements"
      },
      {
        "number":"ME330",
        "name":"Fluid Mechanics"
      },
      {
        "number":"ME318M",
        "name":"Engineering Computational Methods"
      },
      {
        "number":"ME324",
        "name":"Dynamics"
      },
      {
        "number":"EM319",
        "name":"Mechanics of Solids"
      },
      {
        "number":"ME326",
        "name":"Thermodynamics"
      },
      {
        "number":"M427J",
        "name":"Differential Equations"
      },
      {
        "number":"M340L",
        "name":"Linear Algebra"
      },
      {
        "number":"EM306",
        "name":"Statics"
      },
      {
        "number":"ME353",
        "name":"Engineering Finance"
      },
      {
        "number":"ME335",
        "name":"Engineering Statistics"
      },
      {
        "number":"CS312",
        "name":"Introduction to Programming (Java)"
      }
    ]
  }

  render() {
    var resumeDownload = "https://drive.google.com/file/d/1cm9UuY0VdFVuBkfjotVyGfE_BTl8i1qP/view?usp=sharing";
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
    var skills = this.resume.skills.map(function(skills){
      var className = 'bar-expand '+skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{width:skills.level}}className={className}></span>
          <em>{skills.name}</em>
        </li>
      )
    })
    var courses = this.resume.courses.map(function(course){
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
          <a href={resumeDownload} className="button" download>
            <i className="fa fa-download"></i>Download Resume
          </a>
        </p>
      </div>
      
   </section>
    );
  }
}

export default Resume;
