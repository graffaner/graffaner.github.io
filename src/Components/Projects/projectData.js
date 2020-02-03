import React from 'react';

const projectData = [
    {
        name: 'E-Skateboard',
        icon: 'fa fa-bolt',
        text: (
            <div className="projectBox">
                
                <h1>
                    Homemade Electric Skateboard
                </h1>

                <div className="projectPic-wide">
                    <img src="/images/board_tahoe.jpg" />
                    <figcaption> 
                        Electric Skateboard V2 at Lake Tahoe
                    </figcaption>
                </div>

                <br/>

                <p>
                    Project Motivation: 
                    <br/> <br/>
                    In the summer after my second-year (2016) in college, I made a homemade electric skateboard to accomodate my ambivalence to walking to class.
                    <br/><br/>
                    Walking to class in Texas heat across "The Forty Acres," which now stretches to 431 acres, was every student's biggest dread. Alternative to walking, other options were biking, skateboarding, riding the bus, or skipping class, which seemed to be the most popular option. (Note: This was before all the electric scooters and cheaper modes of transportation existed.)
                    <br/><br/>
                    My ideal alternative was something that didn't require a lot of physical strain, while being portable enough carry into class. Parking even for bikes were limited.
                    <br/><br/>
                    To be continued...
                </p>

                <hr/>

                <h1>
                    Electric Skateboard Version 1
                </h1>

                <hr/>

                <h1>
                    Electric Skateboard Version 2
                </h1>
                
                <hr/>

                <h1>
                    Honors Thesis - Safety Risks with DIY Electric Rideables
                </h1>

                <div className="projectPic">
                    <img src='/images/skateboard-graph.png' />
                    <figcaption>
                        Figure from Honors Thesis
                    </figcaption>
                </div>
            
            </div>
        )
    },
    {
        name: 'Fire Fighting Robot',
        icon: 'fa fa-robot',
        text: 'Coming Soon...'
    },
    {
        name: 'Maze Robot',
        icon: 'fa fa-map-marked-alt',
        text: 'Coming Soon...'
    },
    {
        name: '3D Printer',
        icon: 'fa fa-print',
        text: 'Coming Soon...'
    }
];

export default projectData;