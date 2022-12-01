// Course information
const courses = ["ap-chem", "ap-calc", "ap-lang", "apush", "ap-physics"];
const coursesUnits = [9, 9, 9, 9, 9];
const coursesSections = {
    "ap-chem": [ // Course name
        [ // Unit number 1
            { // Section 1
                "name": "Moles and Molar Mass", // Section name
                "practiceProblems": [ // Practice problems array
                    {
                        "q": "How many molecules are in one mol?", // Question
                        "as": ["6.02", "0.08206", "6.02x10^23", "4.184"], // Answers
                        "a_correct": 2 // Correct answer index
                    },
                    {
                        "q": "Using your ptable, what is the molar mass of Lithium?",
                        "as": ["3", "6.94g/mol", "13.88g/mol", "Li"],
                        "a_correct": 1
                    }
                ]
            },
            {
                "name": "Mass Spectroscopy of Elements",
                "url": "https://www.youtube.com/watch?v=iRGfiIhM5NU",
                "urliframeID": "iRGfiIhM5NU"
            },
            {
                "name": "Elemental Composition of Pure Substances",
                "url": "https://www.youtube.com/watch?v=iik25wqIuFo",
                "urliframeID": "iik25wqIuFo"
            },
            {
                "name": "Combustion Analysis",
                "url": "https://www.youtube.com/watch?v=8OrvHqMF220",
                "urliframeID": "8OrvHqMF220"
            },
            {
                "name": "Balancing Equations using the RIP Chart",
                "url": "https://www.youtube.com/watch?v=CTLxyZQVwVY",
                "urliframeID": "CTLxyZQVwVY"
            },
            {
                "name": "Enthalpy and Equilibrium",
                "url": "https://www.youtube.com/watch?v=gZjYA6iDRyk",
                "urliframeID": "gZjYA6iDRyk"
            },
            {
                "name": "What is pH? Solving for pH, pOH, and H+ Concentrations",
                "url": "https://www.youtube.com/watch?v=HQuBH4IHVfA",
                "urliframeID": "HQuBH4IHVfA"

            }
        ],
        [ // Unit 2
            {
                "name": "Types of Chemical Bonds",
            },
            {
                "name": "Intramolecular Force and Potential Energy",
            },
            {
                "name": "Structure of Ionic Solids",
            },
            {
                "name": "Structure of Metals and Alloys",
            },
            {
                "name": "Lewis Diagrams",
            },
            {
                "name": "Resonance and Formal Charge",
            },
            {
                "name": "Periodic Trends",
            },
            {
                "name": "VSEPR and Bond Hybridization",
            }
        ]
    ]
};