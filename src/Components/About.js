import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <nav id="nav-wrap">

        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
          <li><a className="smoothscroll" href="#home" onClick={this.props.frontpageHandler}>Home</a></li>
          <li className="current"><a className="smoothscroll" href='#about' onClick={this.props.aboutHandler}>About</a></li>
          <li><a className="smoothscroll" href='#resume' onClick={this.props.resumeHandler}>Resume</a></li>
          <li><a className="smoothscroll" href="#projects" onClick={this.props.projectHandler}>Projects</a></li>
          <li><a className="smoothscroll" href="#food" onClick={this.props.foodHandler}>Food</a></li>
          
          {/* <li><a className="smoothscroll" href="#contact" onClick={this.props.contactHandler}>Contact</a></li> */}
        </ul>

      </nav>

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
