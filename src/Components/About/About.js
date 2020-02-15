import React, { Component } from 'react';
import aboutData from './aboutData';

class Portfolio extends Component {
  render() {

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

        <h1>About Me</h1>

        <p>
          {aboutData.aboutme}
        </p>

        <h1>Why Mechanical Engineering?</h1>

        <p>
          {aboutData.aboutme}
        </p>

        <h1>Interests?</h1>

        <p>
          {aboutData.aboutme}
        </p>

        <img className="portrait" src="/images/aboutme.jpg" />
        <img src="/images/laying_on_tree.jpg" />

   </section>
    );
  }
}

export default Portfolio;
