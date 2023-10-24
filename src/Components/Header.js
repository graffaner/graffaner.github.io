import React, { Component } from 'react';
import { Medium, Linkedin, Github } from './Social';

class Header extends Component {

  render() {

    return (
      <header id="home">

      <HeaderNav
        navClassName="headerNav"
        frontpage={ true }
        frontpageHandler={ this.props.frontpageHandler }
        aboutHandler={ this.props.aboutHandler }
        resumeHandler={ this.props.resumeHandler }
        projectHandler={ this.props.projectHandler }
      />

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">Lei Chen</h1>
          <h3>
            <span>A <b>Passionate</b> Software Engineer</span>
          </h3>
          {/* <hr /> */}
          <ul className="social">
            {/* <Medium/> */}
            <Linkedin/>
            <Github/>
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#aboutBrief"><i className="icon-down-circle"></i></a>
      </p>

      </header>
      
    );
  }
}

class HeaderNav extends Component {
  render() {
    const navClassName = this.props.navClassName;
    const homeListClassName = this.props.frontpage ? 'current' : '';
    const aboutListClassName = this.props.about ? 'current' : '';
    const resumeListClassName = this.props.resume ? 'current' : '';
    const projectListClassName = this.props.project ? 'current' : '';
    const foodListClassName = this.props.food ? 'current' : '';

    return (
      <nav id="nav-wrap" className={navClassName}>

        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
          <li className={homeListClassName}><a className="smoothscroll" href="#home" onClick={this.props.frontpageHandler}>Home</a></li>
          <li className={aboutListClassName}><a className="smoothscroll" href='#about' onClick={this.props.aboutHandler}>About</a></li>
	        <li className={resumeListClassName}><a className="smoothscroll" href='#resume' onClick={this.props.resumeHandler}>Resume</a></li>
          <li className={projectListClassName}><a className="smoothscroll" href="#projects" onClick={this.props.projectHandler}>Projects</a></li>
          {/* <li className={foodListClassName}><a className="smoothscroll" href="#food" onClick={this.props.foodHandler}>Food</a></li> */}
            
          {/* <li><a className="smoothscroll" href="#contact" onClick={this.props.contactHandler}>Contact</a></li> */}
        </ul>

      </nav>
    );
  }
}

export { Header, HeaderNav };
