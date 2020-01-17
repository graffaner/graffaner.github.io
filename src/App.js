import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {},
      about: true,
      resume: false
    };

    // Google Analytics initialization
    // ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  // initialize resume data funciton
  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  // update state if resume data is changed
  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <div> 
          {this.state.about 
          ? <About data={this.state.resumeData.main}/>
          : null}
        </div>
        {/* <Resume data={this.state.resumeData.resume}/> */}
        {/* <Portfolio data={this.state.resumeData.portfolio}/> */}
        {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
        {/* <Contact data={this.state.resumeData.main}/> */}
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
