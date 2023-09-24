import React from 'react';


const foodData = [
    {
        name:"Discada",
        img:"food_austin_discada.png",
        location:"Austin,TX",
        website:"http://www.discadatx.com/",
        type:"Tacos",
        price:12,
        rating:8,
        goto_menu:["8 Taquitos (Extra Pineapples)"],
        description:(
            <div>
                Description Coming Soon
                {/* <input type="checkbox" className="read-more-state" id="post"/>
                <p className="read-more-wrap">
                    a;sldfja;sldfjl;aksdjfl;kasdjfl;kasdjfl;kasdjf;lkasdjfl;kasdjf;lkasdjfkl;asdjf;lkasdjfl;kasjdfkl;ajsd;lkfajsd;klfjs;fljdfasdlfjhasdl;fja;sdlkfj;lakjfl;kasjf;klasdjf;lkajsdf;lkjasdl;kfjalksfj;lkasjdfklajsdlkfjasdlkfjklasdfjlasdfjkl
                    Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food 
                    <span className="read-more-target">
                        Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food truck Discada is a food  Discada is a food  Discada is a food  Discada is a food  Discada is a food  Discada is a food  Discada is a food  Discada is a food  Discada is a food  Discada is a food  Discada is a food  Discada is a food  Discada is a food 
                    </span>
                </p>
                <label for="post" className="read-more-trigger"></label> */}
            </div> 
        )
    },
    {
        name:"Tarka",
        img:"food_austin_tarka.jpg",
        location:"Austin,TX",
        website:"https://tarkaindiankitchen.com/",
        type:"Indian",
        price:12,
        rating:6.5,
        goto_menu:["Tikka Masala (Chicken)","Garlic Naan"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Tumble 22",
        img:"food_austin_tumble.jpg",
        location:"Austin,TX",
        website:"http://tumble22.com/",
        type:"Fried Chicken",
        price:15,
        rating:6.5,
        goto_menu:["O.G. Sandwhich","Side of Mac & Cheese","Extra Pickles (2x)"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Gourdoughs",
        img:"food_austin_gourdoughs.jpg",
        location:"Austin,TX",
        website:"https://gourdoughs.com/",
        type:"Donuts",
        price:7,
        rating:7,
        goto_menu:["Miss Shortcake","Nutty Valentine"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Taco Joint",
        img:"food_austin_tacojoint.jpg",
        location:"Austin,TX",
        website:"https://www.austintacojoint.com/",
        type:"Tacos",
        price:8,
        rating:7.5,
        goto_menu:["Migas Taco with Chipotle Sauce","Fried Fish Taco","Street Taco"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Cabo Bob's",
        img:"food_austin_cabo.png",
        location:"Austin,TX",
        website:"https://cabobobs.com/",
        type:"Mexican",
        price:8,
        rating:6,
        goto_menu:["Burrito with Fresh Cilantro Tomatillo Tortilla"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Culinary Dropout",
        img:"food_austin_culinary.jpeg",
        location:"Austin,TX",
        website:"https://www.culinarydropout.com/locations/austin-tx/",
        type:"American",
        price:25,
        rating:7,
        goto_menu:["36 Hour Pork Ribs","Katsu Sandwhich"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Velvet Tacos",
        img:"food_austin_velvet.jpg",
        location:"Austin,TX",
        website:"https://www.velvettaco.com/location/austin/",
        type:"Tacos",
        price:10,
        rating:6,
        goto_menu:["Kobe Bacon Burger"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Snooze",
        img:"food_austin_snooze.jpg",
        location:"Austin,TX",
        website:"https://www.snoozeeatery.com/",
        type:"Brunch",
        price:10,
        rating:7.5,
        goto_menu:["Snooze Breakfast Burrito *Both Sauces*"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Madam Mam's",
        img:"food_austin_madam.jpeg",
        location:"Austin,TX",
        website:"https://www.madammam.com/",
        type:"Thai",
        price:13,
        rating:7,
        goto_menu:["Bankrupt Noodles","Sweet Siam Wings","Pad See Ew"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Sazan Ramen",
        img:"food_austin_sazan.jpeg",
        location:"Austin,TX",
        website:"https://sazanramen.com/",
        type:"Ramen",
        price:14,
        rating:9,
        goto_menu:["Takoyaki","Paitan Ramen"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Ramen Tatsuya",
        img:"food_austin_tatsuya.jpg",
        location:"Austin,TX",
        website:"https://ramen-tatsuya.com/",
        type:"Ramen",
        price:13,
        rating:6,
        goto_menu:["Mi-So-Not (Add Pork Chashu)"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Tyson's Tacos",
        img:"food_austin_tysons.jpg",
        location:"Austin,TX",
        website:"http://www.tysonstacos.com/menu",
        type:"Tacos",
        price:12,
        rating:7,
        goto_menu:["Carne Asada (add Pineapples)","Queso and Chips"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Homeslice",
        img:"food_austin_homeslice.jpg",
        location:"Austin,TX",
        website:"https://homeslicepizza.com/",
        type:"Pizza",
        price:10,
        rating:7,
        goto_menu:["To be decided"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Terry Black's BBQ",
        img:"food_austin_terry.jpg",
        location:"Austin,TX",
        website:"",
        type:"Barbeque",
        price:25,
        rating:7,
        goto_menu:["To be decided"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Summer Moon",
        img:"food_austin_summermoon.jpg",
        location:"Austin,TX",
        website:"https://summermooncoffee.com/",
        type:"Coffee",
        price:6,
        rating:9,
        goto_menu:["The Quarter-Winter Moon"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Jinya Ramen",
        img:"food_austin_jinya.jpg",
        location:"Austin,TX",
        website:"https://jinya-ramenbar.com/",
        type:"Ramen",
        price:15,
        rating:5,
        goto_menu:["Pork Chashu Bowl","Jinya Bun","Takoyaki"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Amy's Ice Cream",
        img:"food_austin_amys.jpg",
        location:"Austin,TX",
        website:"https://amysicecreams.com/",
        type:"Ice Cream",
        price:6,
        rating:8,
        goto_menu:["Mexican Vanilla with Fresh Strawberries"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Pluckers",
        img:"food_austin_pluckers.png",
        location:"Austin,TX",
        website:"https://www.pluckers.com/",
        type:"Fried Chicken",
        price:15,
        rating:7.5,
        goto_menu:["Boneless wings basket (Baker's Gold & Gold Rush) with Cajun Tossed Chips"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Hopdoddy",
        img:"food_austin_hopdoddy.jpg",
        location:"Austin,TX",
        website:"https://www.hopdoddy.com/",
        type:"Burgers",
        price:15,
        rating:8,
        goto_menu:["Llano Poblano","Green Chile Queso Fries","Parmesean Truffle Fries"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Jeni's Ice Cream",
        img:"food_austin_jenis.jpg",
        location:"Austin,TX",
        website:"https://jenis.com/",
        type:"Ice Cream",
        price:6,
        rating:6.5,
        goto_menu:["Cold Brew","Frose"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Uncle Tetsu",
        img:"food_austin_uncletetsu.jpeg",
        location:"Austin,TX",
        website:"https://uncletetsu-us.com/",
        type:"Cheesecake",
        price:13,
        rating:9,
        goto_menu:["Strawberry Cheesecake"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Gangnam KBBQ",
        img:"food_austin_gangnam.jpeg",
        location:"Austin,TX",
        website:"https://gangnamkbbq.com/",
        type:"Korean BBQ",
        price:50,
        rating:10,
        goto_menu:["Chadolbagi","Samgyeopsal","LA Kalbi","Soybean Stew"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Soupleaf Hotpot",
        img:"food_austin_soupleaf.png",
        location:"Austin,TX",
        website:"https://www.soupleafhotpot.com/",
        type:"Hotpot",
        price:40,
        rating:9.5,
        goto_menu:["Tonkatsu Broth","Prime Angus Shoulder","Angus Brisket"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Pita Shack",
        img:"food_austin_pitashack.jpeg",
        location:"Pflugerville,TX",
        website:"https://www.pita-shack.com/",
        type:"Halal",
        price:12,
        rating:8,
        goto_menu:["Beef Shawarma Wrap"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Buddy's Burger",
        img:"food_austin_buddy.jpg",
        location:"Austin,TX",
        website:"https://buddysburger.com/",
        type:"Burgers",
        price:12,
        rating:8.5,
        goto_menu:["Double Spicy with Cheese","Seasoned Fries"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Jewboy Burgers",
        img:"food_austin_jewboy.jpg",
        location:"Austin,TX",
        website:"https://jewboyburgers.com/",
        type:"Burger",
        price:15,
        rating:8,
        goto_menu:["The Jewboy Burger", "Homeboy Chile Con Queso with Chips"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Tan My",
        img:"food_austin_tanmy.jpeg",
        location:"Austin,TX",
        website:"",
        type:"Pho",
        price:16,
        rating:9,
        goto_menu:["Pho Tai","Bun Cha Gio (Vermicelli with Egg Rolls)"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    },
    {
        name:"Pho Phong Luu",
        img:"food_austin_phongluu.jpeg",
        location:"Austin,TX",
        website:"https://phophongluu.com/",
        type:"Pho",
        price:15,
        rating:9,
        goto_menu:["Garlic Fish Wings","Pho Tai"],
        description:(
            <div>
                Description Coming Soon
            </div>
        )
    }
];

export default foodData;

///////// TEMPLATE ///////////
// {
//     name:"",
//     img:"",
//     location:"",
//     website:"",
//     type:"",
//     price:"$",
//     rating:"",
//     goto_menu:[""],
//     description:(
//         <div>
//             
//         </div>
//     )
// }