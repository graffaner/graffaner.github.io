import React, { Component } from 'react';

class Header extends Component {

  render() {

   // Populates the props variables
    if (this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home" onClick={this.props.frontpageHandler}>Home</a></li>
            <li><a className="smoothscroll" href='#about' onClick={this.props.aboutHandler}>About</a></li>
	         <li><a className="smoothscroll" href='#resume' onClick={this.props.resumeHandler}>Resume</a></li>
            <li><a className="smoothscroll" href="#projects" onClick={this.props.projectHandler}>Projects</a></li>
            <li><a className="smoothscroll" href="#food" onClick={this.props.foodHandler}>Food</a></li>
            
            {/* <li><a className="smoothscroll" href="#contact" onClick={this.props.contactHandler}>Contact</a></li> */}
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Paul Lee</h1>
            <h3>An Austin based <span>Mechanical Engineer</span> {description}</h3>
            <hr />
            <ul className="social">
               <li key="linkedin">
                  <a href="https://www.linkedin.com/in/pjl655/">
                     <i className="fa fa-linkedin"></i>
                  </a>
               </li>

               <li key="github">
                  <a href="https://github.com/Eellaup">
                     <i className="fa fa-github"></i>
                  </a>
               </li>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

      </header>
      
    );
  }
}

export default Header;