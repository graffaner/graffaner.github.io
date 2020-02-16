import React, { Component } from 'react';
import aboutData from './aboutData';

class Portfolio extends Component {
  render() {

    var aboutme = aboutData.aboutme.map(function(item){
      return(
        <div>
          <p>
            {item}
          </p>
        </div> 
      )
    })

    var interests = aboutData.interests.map(function(int){
      return (
        <li>
          {int}
        </li>
      )
    })

    return (
      <section id="about">

        <nav id="nav-wrap" className="compNav">

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

          <div className="column">
            <img className="portrait" src="/images/aboutme.jpg" />
          </div>

          <div className="column">
            <h1>About Me</h1>
            {aboutme}
          </div>

          {/* <img src="/images/laying_on_tree.jpg" /> */}
        </div>

        <br/>

        <div className="row">
          <div className="column">
            <h1>Why Mechanical Engineering?</h1>

            <p>
              {aboutData.why_meche}
            </p>

            <h1>Interests?</h1>

            <p>
              <ul>
                {interests}
              </ul>
            </p>
          </div>
        </div>

      </section>
    
    );
  }
}

export default Portfolio;
