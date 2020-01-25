import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import AboutBrief from './Components/AboutBrief';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Food from './Components/Food';
import Project from './Components/Project';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      foo: 'bar',
      resumeData: {},
      frontpage: true,
      resume: false,
      project: false,
      food: false
    };
    // Google Analytics initialization
    // ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }

  frontpageHandler = () => this.setState({
    frontpage: true,
    about: false,
    resume: false,
    project: false,
    food: false
  })

  aboutHandler = () => this.setState({
    frontpage: false,
    about: true,
    resume: false,
    project: false,
    food: false
  })

  resumeHandler = () => this.setState({
    frontpage: false,
    about: false,
    resume: true,
    project: false,
    food: false
  });

  projectHandler = () => this.setState({
    frontpage: false,
    about: false,
    resume: false,
    project: true,
    food: false
  });

  foodHandler = () => this.setState({
    frontpage: false,
    about: false,
    resume: false,
    project: false,
    food: true
  });
  

  render() {
    return (
      <div className="App">

        <div>
          {this.state.frontpage
          ? <Header 
            frontpageHandler={this.frontpageHandler}
            aboutHandler={this.aboutHandler} 
            resumeHandler={this.resumeHandler} 
            projectHandler={this.projectHandler}
            foodHandler={this.foodHandler}
          />
          : null}
        </div>

        <div>
          {this.state.frontpage
          ? <AboutBrief/>
          : null}
        </div>

        <div>
          {this.state.about
          ? <About 
            frontpageHandler={this.frontpageHandler}
            aboutHandler={this.aboutHandler} 
            resumeHandler={this.resumeHandler} 
            projectHandler={this.projectHandler}
            foodHandler={this.foodHandler}/>
          : null}
        </div>

        <div> 
          {this.state.resume 
          ? <Resume 
            frontpageHandler={this.frontpageHandler}
            aboutHandler={this.aboutHandler} 
            resumeHandler={this.resumeHandler} 
            projectHandler={this.projectHandler}
            foodHandler={this.foodHandler}
          />
          : null}
        </div>

        <div> 
          {this.state.project 
          ? <Project 
            frontpageHandler={this.frontpageHandler}
            aboutHandler={this.aboutHandler} 
            resumeHandler={this.resumeHandler} 
            projectHandler={this.projectHandler}
            foodHandler={this.foodHandler}
          />
          : null}
        </div>

        <div> 
          {this.state.food 
          ? <Food 
            frontpageHandler={this.frontpageHandler}
            aboutHandler={this.aboutHandler} 
            resumeHandler={this.resumeHandler} 
            projectHandler={this.projectHandler}
            foodHandler={this.foodHandler}
          />
          : null}
        </div>

        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
