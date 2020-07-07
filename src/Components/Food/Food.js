import React, { Component } from 'react';
import foodData from './foodData';

class Food extends Component {
  render() {

    var foodCard = foodData.map(function(item){
      var imgSrc = "/images/"+item.img;

      var menu_items = item.goto_menu.map(function(menu_item){
        return(
          <li>{menu_item}</li>
        )
      });

      return(
        <label>
          <input type="checkbox"  />
          <div className="card">
              {/* Front Card */}
              <div className="card-front">
                <img src={imgSrc} />
                <div className="front-container">
                    <h2 className="restaurant-title">
                      <a href={item.website}>{item.name}</a>
                    </h2>
                    {/* Create Tags for the card */}
                    <h2 className="card-tags">
                      {item.type} &#8226; {item.location} &#8226; {item.price} &#8226; {item.rating}
                      <span></span> {/* creates a new line so the above line can stretch across the card */}
                    </h2>
                    <h2 className="goto_menu"> My Personal Favorite: </h2>
                    <p className="menu-items">
                      {menu_items}
                    </p>
                </div>
              </div>
              {/* Back Card */}
              <div className="card-back">
                <div className="back-container">
                  <h2 className="restaurant-title">
                    <a href={item.website}>{item.name}</a>
                  </h2>
                  {item.description}
                </div>
              </div>
          </div> {/* Card */}
        </label>

      )
    })

    return (
      <section id="food">

      <nav id="nav-wrap" className="compNav">

        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
          <li><a className="smoothscroll" href="#home" onClick={this.props.frontpageHandler}>Home</a></li>
          <li><a className="smoothscroll" href='#about' onClick={this.props.aboutHandler}>About</a></li>
          <li><a className="smoothscroll" href='#resume' onClick={this.props.resumeHandler}>Resume</a></li>
          <li><a className="smoothscroll" href="#projects" onClick={this.props.projectHandler}>Projects</a></li>
          <li className="current"><a className="smoothscroll" href="#food" onClick={this.props.foodHandler}>Food</a></li>
          
          {/* <li><a className="smoothscroll" href="#contact" onClick={this.props.contactHandler}>Contact</a></li> */}
        </ul>

      </nav>

      <div id="home"></div>

      {/* Intro */}
      <div>
        {/* Hey, welcome to my food recommendations! Here you'll find a list of restaurants that I recommend if you're in the area. These are my own personal opinions, please feel free to send me your thoughts.  */}
      </div>

      <div className="row">
        {/* Austin City Banner */}
        <div className="city_banner">
          <img src="/images/austin_logo.png" />
        </div>

        {/* TEST SECTION */}
        {/* <label>
          <div className="food-card">
            <div className="card-front">
              <img src={"/images/food_austin_discada.png"} />
              <div className="front-container">
                <h2 className="restaurant-title">
                  <a href={"#"}>Discada</a>
                </h2>
              </div>
            </div>
          </div>
        </label> */}
        {/* TEST SECTION */}
       
        {foodCard}
      </div> {/* row */}
   </section>
    );
  }
}

export default Food;
