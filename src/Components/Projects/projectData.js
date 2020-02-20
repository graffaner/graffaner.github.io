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
                    Walking to class in Texas heat across "The Forty Acres," which now stretches 431 acres, was every student's biggest dread. Alternative to walking, other options were biking, bus commuting, or skipping class, which seemed to be the most popular option. (Note: This was before all the electric scooters and cheaper modes of transportation existed.)
                    <br/><br/>
                    My ideal alternative was something that didn't require a lot of physical strain, while being portable enough carry into class. Parking, even for bikes, was limited.
                    <br/><br/>
                    To be continued...
                </p>

                <hr/>

                <h1>
                    Electric Skateboard Version 1
                </h1>

                <div className="projectPic-wide">
                    <img src="/images/board_v1.jpg" />
                    <figcaption> 
                        Electric Skateboard Version 1 (2016)
                    </figcaption>
                </div>

                <hr/>

                <h1>
                    Electric Skateboard Version 2
                </h1>

                <div className="projectPic-wide">
                    <img src="/images/board_v2.jpg" />
                    <figcaption> 
                        Electric Skateboard Version 2 (2017)
                    </figcaption>
                </div>

                {/* <div className="projectPic-wide">
                    <img src="/images/boardv2_mill.jpg" />
                    <figcaption> 
                        Milling a flat surface
                    </figcaption>
                </div>

                <div className="projectPic-wide">
                    <img src="/images/boardv2_box.jpg" />
                    <figcaption> 
                        Board with box perimeter
                    </figcaption>
                </div>

                <div className="projectPic-wide">
                    <img src="/images/boardv2_box2.jpg" />
                    <figcaption> 
                        Box perimeter glued to board
                    </figcaption>
                </div>

                <div className="projectPic-wide">
                    <img src="/images/boardv2_carbonfiber.jpg" />
                    <figcaption> 
                        Carbon fiber wrap bottom
                    </figcaption>
                </div>

                <div className="projectPic-wide">
                    <img src="/images/boardv2_carbonfiber_top.jpg" />
                    <figcaption> 
                        Carbon fiber wrap top
                    </figcaption>
                </div>

                <div className="projectPic-wide">
                    <img src="/images/boardv2_cf_boxlid.jpg" />
                    <figcaption> 
                        Partial Assembly
                    </figcaption>
                </div> */}

                {/* <div className="projectPic-wide">
                    <img src="/images/boardv2_side.jpg" />
                    <figcaption> 
                        Full Assembly
                    </figcaption>
                </div> */}

                {/* <div className="projectPic-wide">
                    <img src="/images/boardv2_studio.jpg" />
                    <figcaption> 
                        Studio Assembly
                    </figcaption>
                </div> */}
                
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
        name: 'USAR Robot',
        icon: 'fa fa-robot',
        text: (
            <div className="projectBox">
                <h1> 
                    Urban Search and Rescue Robot
                </h1>

                <p>
                    Project Motivation:
                    <br/><br/>
                    In our senior design course, we were tasked with developing a robot capable of performing urban search and rescue (USAR) operations within a burning building. The setting for the USAR operation was to aid firefighters by locating an incapacited person/pet in a smokey high-temperature environment. 
                    <br/><br/>
                    Design Constraints:
                    <br/><br/>
                    Concept Generation:
                    <br/><br/>
                    Pugh Chart:
                    <br/><br/>
                    
                </p>
            </div>
        )
    },
    {
        name: 'Home Cloud Network',
        icon: 'fa fa-cloud',
        text: 'Coming Soon...'
    },
    {
        name: 'Maze Robot',
        icon: 'fa fa-map-marked-alt',
        text: 'Coming Soon...'
    }
];

export default projectData;