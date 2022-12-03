// Course information
class courses {
    static names = ["ap-chem", "ap-calc", "ap-lang", "apush", "ap-physics"];
    static units = [1, 1, 1, 1, 1];
    static sections = {
    "ap-chem": [ // Course name
        [ // Unit number 1
            /*{ // Section 1
                name: "Moles and Molar Mass", // Section name
                practiceProblems: [ // Practice problems array
                    {
                        q: "How many molecules are in one mol?", // Question
                        as: ["6.02", "0.08206", "6.02x10^23", "4.184"], // Answers
                        a_correct: 2 // Correct answer index
                    },
                    {
                        q: "Using your ptable, what is the molar mass of Lithium?",
                        as: ["3", "6.94g/mol", "13.88g/mol", "Li"],
                        a_correct: 1
                    }
                ]
            },*/
            {
                name: "Combustion Analysis", // Section name
                url: "https://www.youtube.com/watch?v=8OrvHqMF220" // Video URL
                // (keep video URL normal: no '&t=<n>s' appended pls);
            },
            {
                name: "Finding Equilibrium Concentrations with the ICE chart",
                url: "https://www.youtube.com/watch?v=tQkbnZsxCew"
            },
            {
                name: "Balancing Equations using the RIP Chart",
                url: "https://www.youtube.com/watch?v=CTLxyZQVwVY"
            },
            {
                name: "Enthalpy and Equilibrium",
                url: "https://www.youtube.com/watch?v=gZjYA6iDRyk"
            },
            {
                name: "What is pH? Solving for pH, pOH, and H+ Concentrations",
                url: "https://www.youtube.com/watch?v=HQuBH4IHVfA"
            },
            {
                name: "Identifying Reactions",
                url: "https://www.youtube.com/watch?v=g2v9dVRf5Ow"
            },
            {
                name: "Understanding Mass Spectroscopy",
                url: "https://www.youtube.com/watch?v=_yZRS9lJCbA"
            },
            {
                name: "Graham's Law and Rates of Effusion and Diffusion for Gases",
                url: "https://www.youtube.com/watch?v=_8ztVO-A_sg"
            },
            {
                name: "Gas Laws",
                url: "https://www.youtube.com/watch?v=cf33Vr6l7k0"
            }
        ]
    ],
    "ap-calc": [
        [
            {
                name: "Memorizing the Unit Circle (Radians)",
                url: "https://www.youtube.com/watch?v=2bAXVtKKwX0"
            },
            {
                name: "Understanding Limits and Finding Them From Graphs",
                url: "https://www.youtube.com/watch?v=m8G-qeOxX3k"
            },
            {
                name: "Finding Limits Analytically",
                url: "https://www.youtube.com/watch?v=sVYNzAbguCg"
            },
            {
                name: "Understanding the Derivative",
                url: "https://www.youtube.com/watch?v=lXWUHTeee4s"
            },
            {
                name: "Derivatives by Definition",
                url: "https://www.youtube.com/watch?v=PTWZVFXkJDY"
            },
            {
                name: "Differentiation Rules Part 1",
                url: "https://www.youtube.com/watch?v=qR9t-LtwwqQ"
            },
            {
                name: "The Intermediate Value Theorem",
                url: "https://www.youtube.com/watch?v=vwMJ9i_FE6w"
            },
            {
                name: "Differentiation Rules Part 2",
                url: "https://www.youtube.com/watch?v=5WuGXaFrQ1A"
            },
            {
                name: "How to Use the Chain Rule",
                url: "https://www.youtube.com/watch?v=Y402bLqX1qg"
            },
            {
                name: "Complex Differentiation",
                url: "https://www.youtube.com/watch?v=z2f5_kWjch8"
            },
            {
                name: "Implicit Differentiation",
                url: "https://www.youtube.com/watch?v=XhjHIMvo87E"
            },
            {
                name: "Memorizing Trigonometric Derivatives",
                url: "https://www.youtube.com/watch?v=yrnuTPR_iRM"
            },
            {
                name: "Finding Extrema",
                url: "https://www.youtube.com/watch?v=wC1AjjFy3hU"
            },
            {
                name: "Complex is Easier?",
                url: "https://www.youtube.com/watch?v=XQveLfZQc6o"
            }
        ]
    ],
    "apush": [
        [
            {
                name: "How to Complete the APUSH Summer Assignment",
                url: "https://www.youtube.com/watch?v=eAnmx9zG_yg" // depr?
            },
            {
                name: "How to Write the LEQ (APUSH/Euro)",
                url: "https://www.youtube.com/watch?v=sgLjXnt9avo"
            },
            {
                name: "City Upon a Hill and American Exceptionalism",
                url: "https://www.youtube.com/watch?v=TpTv6CeRTUI"
            },
            {
                name: "Antebellum Reformers",
                url: "https://www.youtube.com/watch?v=auy4XilzaZw"
            }
        ]
    ],
    "ap-lang": [
        [
            {
                name: "Rhetorical Analysis Tips",
                url: "https://www.youtube.com/watch?v=GsYeFpjyDak"
            }
        ]
    ],
    "ap-physics": [
        [
            {
                name: "Designing a Controlled Experiment",
                url: "https://www.youtube.com/watch?v=y0LB47mcOM0"
            }
        ]
    ]
};
}