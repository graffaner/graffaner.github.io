const resume = {
    "skillmessage":"",
    "education":[
      {
        "school":"Georgia Institute of Technology",
        "degree":"M.S. Computer Science",
        "graduated":"Spring 2021 - 2024, GPA: 3.87/4.00",
        "description":[
          "Specialization in Machine Learning"
        ],
        "othertitle":["Courses"],
        "otherdesc":{
          "Courses":[
            "(A) CS6200 - Graduate Introduction to Operating Systems",
            "(A) CS7647 - Machine Learning for Trading",
            "(A) CS6300 - Software Development Process",
            "(A) CSE6242 - Data & Visual Analytics",
            "(B) CS6400 - Database Systems Concepts & Design",
            "(A) CS6476 - Computer Vision",
            "(A) CS6603 - AI, Ethics, and Society",
            "(A) CS7632 - Game AI",
            "(Current) CS7641 - Machine Learning",
            "(Next) CS6515 - Introduction to Graduate Algorithms"
          ]
        }
      },
      {
        "school":"University of Texas at Austin",
        "degree":"B.S. Mechanical Engineering Honors",
        "graduated":"May 2018, GPA: 3.92/4.00",
        "description":[
          "Engineering Honors Program: Honors Thesis - Safety Risks with DIY Electric Rideables",
          "Accolades: Mechatronics Certificate, Engineer-in-Training (EIT 64856)",
          "Clubs & Activities: Tau Beta Pi, UT Fire Research, ASME",
        ],
        "othertitle":[
          "Graduate School Admission (2018)"
        ],
        "otherdesc":{
          "Graduate School Admission (2018)":[
            "Georgia Tech joint with Seoul National University",
            "University of Michigan"
          ]
        }
      }
    ],
    "work":[
      {
        "company":"Micah Group",
        "title":"Data Engineer",
        "years":"Sept 2022 - Present",
        "description":[
          "Developed document extraction microservice in FastAPI to process over 900 financial documents via (Google Document AI, OCR, and custom grouping algorithm).",
          "Implemented auto-decision feature to automatically approve/deny over \$31.8M loan requests based on historical banking and credit report data.",
          "Scope included developing CRUD operations with Django REST API, deploying to GCP Cloud Run/Functions using Github Actions, and develop new features with feature flags and CI/CD.",
        ]
      },
      {
        "company":"IPSDI, Inc.",
        "title":"Software Engineer - Part Time",
        "years":"Oct 2022 - Present",
        "description":[
          "Created data pipelines to normalize (120+) fire department's dispatch data (100M+ incidents) with TypeScript, AWS (Lambda, S3, ECS, Cloudwatch, etc). and Github Actions.",
          "Deployed API pollers to AWS with serverless architecture.",
          "Create automated workflows with Github Actions (Sends a SNS message to trigger a Lambda function to perform a query on a PostgreSQL RDS database through VPC access)."
        ]
      },
      {
        "company":"Altect, Inc.",
        "title":"Vice President of Engineering",
        "years":"Sept 2019 - Aug 2022",
        "description":[
          "Altect’s business is to develop and provide novel fire protection technologies for emerging, clean energy technologies including electric vehicle and energy storage.",
          "Co-wrote a patent (20220094014) and SBIR grant proposals that brought in $1.2M.",
          "Developed main software \& control and data pipeline for MVP prototype via JavaScript, HTML/CSS, Flask API, PLC, SQL, and FireBase. Created working prototype to mitigate fire/explosion hazards due to Lithium-based battery failures.",
        ]
      },
      {
        "company":"UT Fire Research",
        "title":"Research Engineer",
        "years":"Sept 2019 - June 2020",
        "description":[
          "Developed a surrogate battery energy storage system that releases safe non-flammable gases similar to that of a rack-level failure.",
          "Created an array of custom wireless sensors tuned to detect the dissemination of the safe non-flammable gas.",
          "Sensors upload data via REST API into a local MySQL server on a laptop.",
          "Participated in field studies with the Honolulu Fire Department and the Phoenix Fire Department to align research with industry."
        ]
      },
      {
        "company":"Tesla, Inc.",
        "title":"Quality Data Science & Systems",
        "years":"Jun 2019 - Sept 2019",
        "description":[
          "Was in transit for a formal position as an Associate Data Scientist",
          "Developed micro-web applications in Python Flask to promote efficient communication of critical information",
          "Analyzed quality metrics in compliance with Tesla's Quality Management System (QMS)",
          "Autonomously maintained critical information via Confluence REST API’s.",
          "Offered a formal position as an Associate Process Engineer for the Model 3 Drive Unit"
        ]
      },
      {
        "company":"Tesla, Inc.",
        "title":"Quality Engineering Technician II",
        "years":"Jun 2018 - Jun 2019",
        "description":[
          "Employee of the Quarter - Q3 2018",
          "Successfully saved the company $10.5M in the third and fourth quarters of 2018 by coordinating with an engineering team and senior managers to develop and implement a new production line",
          "Deployed stand-alone applications in Java, Python, and MySQL as serviceable quality tools",
          "Maximized efficiency and quality in accordance with the company’s standards by utilizing root-cause analysis and lean manufacturing methodologies in the Model 3 battery module production"
        ]
      },
      {
        "company":"UT Fire Research",
        "title":"Undergraduate Research Assistant",
        "years":"Feb 2017 - May 2018",
        "description":[
          "Contributed to research for the automation of a testing facility that simulated indoor flashover fires",
          "Acted as the leader for a team of undergraduate students, providing mentorship and coaching where needed",
          "Conducted comprehensive research into the lithium-ion battery degredation"
        ]
      },
      {
        "company":"iKids, Inc.",
        "title":"Robotics Instructor",
        "years":"Aug 2017 - Dec 2017",
        "description":[
          "Engaged elementary students in STEM fields through Lego Mindstorms NXT robotic kits."
        ]
      },
      {
        "company":"Applied Research Laboratories",
        "title":"Student Intern",
        "years":"Mar 2016 - Dec 2016",
        "description":[
          "Expedited the full-cycle of system development, designing, commissioning, fabricating, and assembly of experimental test systems according to exact specifications by utilizing an extensive knowledge of CAD software",
          "Developed new parts and modified existing parts in PTC Creo CAD software to enhance functionality",
          "Created accurate engineering drawings by leveraging Geometric Dimensioning and Tolerancing practices",
          "Maintained an attentive, professional attitude while communicating with vendors to commission custom parts",
          "Supervised the packaging, shipping, and receiving of custom and original equipment parts"
        ]
      }
    ],
    "skills":[
      {
        "name":"Python",
        "level":"100%"
      },
      {
        "name":"Github",
        "level":"100%"
      },
      {
        "name":"SQL",
        "level":"90%"
      },
      {
        "name":"Google Cloud Platform",
        "level":"70%"
      },
      {
        "name":"Amazon Web Services",
        "level":"70%"
      },
      {
        "name":"Java",
        "level":"50%"
      },
      {
        "name":"JavaScript",
        "level":"50%"
      },
      {
        "name":"Solidworks",
        "level":"50%"
      },
      {
        "name":"React JS",
        "level":"20%"
      }
    ],
    "courses":[
      {
        "number":"CS7632",
        "name":"Game AI"
      },
      {
        "number":"CS6603",
        "name":"AI, Ethics, and Society"
      },
      {
        "number":"CS6476",
        "name":"Computer Vision"
      },
      {
        "number":"CS6400",
        "name":"Database Systems Concepts & Design"
      },
      {
        "number":"CSE6242",
        "name":"Data & Visual Analytics"
      },
      {
        "number":"CS6300",
        "name":"Software Development Process"
      },
      {
        "number":"CS7647",
        "name":"Machine Learning for Trading"
      },
      {
        "number":"CS6200",
        "name":"Graduate Introduction to Operating Systems"
      },
      {
        "number":"ME344",
        "name":"Dynamic Systems & Controls"
      },
      {
        "number":"ME379M",
        "name":"Theory/Design of Mechanical Measurements"
      },
      {
        "number":"ME348D",
        "name":"Mechatronics II"
      },
      {
        "number":"ME348C",
        "name":"Mechatronics I"
      },
      {
        "number":"ME340",
        "name":"Mechatronics (Undergrad)"
      },
      {
        "number":"ME679",
        "name":"Undergraduate Honors Thesis"
      },
      {
        "number":"ME339",
        "name":"Heat Transfer"
      },
      {
        "number":"ME334",
        "name":"Materials Engineering"
      },
      {
        "number":"ME338",
        "name":"Machine Elements"
      },
      {
        "number":"ME330",
        "name":"Fluid Mechanics"
      },
      {
        "number":"ME318M",
        "name":"Engineering Computational Methods"
      },
      {
        "number":"ME324",
        "name":"Dynamics"
      },
      {
        "number":"EM319",
        "name":"Mechanics of Solids"
      },
      {
        "number":"ME326",
        "name":"Thermodynamics"
      },
      {
        "number":"M427J",
        "name":"Differential Equations"
      },
      {
        "number":"M340L",
        "name":"Linear Algebra"
      },
      {
        "number":"EM306",
        "name":"Statics"
      },
      {
        "number":"ME353",
        "name":"Engineering Finance"
      },
      {
        "number":"ME335",
        "name":"Engineering Statistics"
      },
      {
        "number":"CS312",
        "name":"Introduction to Programming (Java)"
      }
    ]
  }

export default resume;