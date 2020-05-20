import React from 'react';
import { Node, Context } from 'react-mathjax';

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
        name: 'Home Gym',
        icon: 'fa fa-dumbbell',
        text: (
            <div className="projectBox">
                <h1>
                    Homemade Concrete Dumbbells
                </h1>

                <div className="projectPic-wide">
                    <img src="/images/home_gym.jpg" />
                    <figcaption> 
                        Flintstones-inspired home gym
                    </figcaption>
                </div>

                <br/>

                <p>
                    Project Motivation:
                    <br/> <br/>
                    With the coronavirus pandemic in 2020, quarantine orders have caused non-essential businesses to shut down, including gyms. Stay-at-home orders have inspired people worldwide to explore home workouts, rendering those equipments to become extinct (pullup bars, dumbbells, etc.). The prices of these equipment have also skyrocketed due to high demand and low supply. In this quick quarantine project, I seek to build a low-cost gym tool inspired from social media and the Flintstones. The lack of social distancing from my kitchen has caused me to gain a considerable amount of weight...
                </p>

                <hr/>

                <h1>
                    Bill of Materials
                </h1>

                <table className="project-table">
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                    </tr>
                    <tr>
                        <td>
                            <a href="https://www.homedepot.com/p/Quikrete-60-lb-Concrete-Mix-110160/100318478">
                                Concrete Mix 60lb
                            </a>
                        </td>
                        <td>1x</td>
                        <td>$3.15</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="https://www.homedepot.com/p/HDX-5-qt-Mixing-Bucket-RG522HD/301084090">
                                5 qt Mixing Bucket
                            </a>
                        </td>
                        <td>4x</td>
                        <td>$2.57</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="https://www.homedepot.com/p/6420U-1-1-4-in-x-1-1-4-in-x-48-in-Hardwood-Round-Dowel-10001811/203334072">
                                Wooden Dowel Rod 1-1/4in D x 48in L
                            </a>
                        </td>
                        <td>1x</td>
                        <td>$4.98</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="https://www.homedepot.com/p/Everbilt-1-4-in-20-x-3-in-Zinc-Plated-Hex-Bolt-800636/204633286">
                                1/4in-20 Hex Head Bolt x 3in
                            </a>
                        </td>
                        <td>4x</td>
                        <td>$0.27</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="https://www.homedepot.com/p/Everbilt-1-4-in-20-Zinc-Plated-Hex-Nut-801736/204647886">
                                1/4in-20 Hex Nut
                            </a>
                        </td>
                        <td>8x</td>
                        <td>$0.08</td>
                    </tr>
                    <tr className="table-total">
                        <td></td>
                        <td>Total</td>
                        <td>$20.13 plus tax</td>
                    </tr>
                </table>

                <hr/>

                <h1>
                    Instructions
                </h1>

                <h3>
                    1. Concrete Material Properties
                </h3>

                <p>
                    According to the <a href="https://images.homedepot-static.com/catalog/pdfImages/9e/9e7f42ef-11a6-4cfb-ab44-5c4663f75dc2.pdf">Quikrete product description</a>, 60lbs of concrete mix yields about 0.45 cu ft.
                    <br/> <br/>
                    Therefore, the density (mass/volume) is approximately 4.456 lb/qt (we're buying a quart sized bucket, so might as use quarts). Use this density to size how heavy you want your dumbbells.
                    <br/> <br/>
                    I aimed for about 30lb dumbbells (15lbs on each side), so I'll need about 3.37 quarts of concrete mix on each side. 
                </p>

                <h3>
                    2. Handle Assembly
                </h3>

                <div className="row">
                    <div className="column">
                        <p>
                            <img className="portrait" src="/images/dumbbells_handle.jpg" />
                            For the handle I decided to use a wooden dowel rod (the same rod that goes in a closet hanging rack) as my handle. I figured since the length of the handle will be so short, there wouldn't be a significant amount of bending moment to snap it. If we were aiming to make a barbell, it'd be better to change the material to a type of metal.
                            <br/> <br/>
                            At Home Depot I had an associate cut my 48in length rod cut it into lengths of 14in. I was left with (3x) 14ins and (1x) 6in.
                            <br/> <br/>
                            Since concrete doesn't adhere very well to wood, we'll need to add T's to each end of the handle to make sure the concrete slabs dont slip off. We'll use 1/4in-20 x 3in bolts to create the T's. I drilled a 1/4in hole about 1.5in away from each end. It's important when drilling these holes to make it as clean as possible. Any cracks could propagate and compromise the integrity of your handle.
                        </p>
                    </div>
                </div>

                <h3>
                    3. Concrete Mixing and Curing
                </h3>

                <p>
                    Mixing Tip:
                    <br/> <br/>
                    The mixing process is a bit of a pain. Do not put all the concrete mix in the bucket and add water. The top layer will moisturize and trap all the water. Instead add a little bit of concrete mix and water at a time until all of the mix is dissolved. I used the extra dowel rod piece as my mixing stick. Repeat this until you've reached the desired volume. In my case, 3.37 quarts.
                    <br/> <br/>
                    Part 1
                    <br/> <br/>
                    While mixing, place the handle in the bucket. The concrete mix has rock chunks and the "batter" gets pretty thick so it will be difficult to stick the handle in later. Let that cure overnight or about 12-15hrs.
                </p>

                <div className="projectPic">
                    <img src="/images/dumbbells_part1.jpg" />
                    <figcaption> 
                        Part 1: Place the wooden stick in concrete solution
                    </figcaption>
                </div>

                <p>
                    Part 2
                    <br/> <br/>
                    After the concrete has fully cured, I used a box cutter to tear the mixing bucket off. Concrete doesn't stick to plastic, so it's possible get the bucket off without tearing it. But it just wasn't worth the time.
                    <br/> <br/>
                    The next step is to repeat on the other side. Again, have the handle already in the bucket as you mix. It gets in the way, but saves you a lot of trouble by having the handle already in place. After all you have enough concrete solution, balance it upright and let it cure overnight.
                </p>

                <div className="projectPic">
                    <img src="/images/dumbbells_part2.jpg" />
                    <figcaption> 
                        Part 2: After curing one side, flip and repeat
                    </figcaption>
                </div>

                <p>
                    Part 3
                    <br/> <br/>
                    Lastly, its time to exfoliate the last side of the dumbbell. You're dumbbells are now complete and ready for workout!!!
                </p>

                <div className="projectPic">
                    <img src="/images/dumbbells_part3.jpg" />
                    <figcaption> 
                        Part 3: Exfoliate the last side of the dumbbell
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

                <div className="projectPic-wide">
                    <img src="/images/usar.jpg" />
                    <figcaption> 
                        Robot at the Competition Finals
                    </figcaption>
                </div>

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
    }
];

export default projectData;