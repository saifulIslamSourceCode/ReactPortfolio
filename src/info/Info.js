import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

export const info = {
    firstName: "SAIFUL",
    lastName: "Islam",
    initials: "js", 
    position: "Angular Developer (Intern) at BDCOM Online Ltd.",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '⛽',
            text: 'fueled by JavaScript'
        },
        {
            emoji: '🌎',
            text: "Dhaka, Bangladesh"
        },
        {
            emoji: "💼",
            text: "B.Sc. in Computer Science & Engineering"
        },
        {
            emoji: "📧",
            text: "saifulislam.developer@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.linkedin.com/in/saifulislam-dev/",
            icon: 'fa fa-linkedin',
            label: 'linkedin'
        },
        {
            link: "https://github.com/saifulIslamSourceCode",
            icon: 'fa fa-github',
            label: 'github'
        },
        {
            link: "https://leetcode.com/u/saifulWebDev/",
            icon: 'fa fa-code',
            label: 'leetcode'
        },


    ],


    bio: "I'm a Computer Science graduate who treats clean code like a love language and debugging like detective work. Studied CSE, now in a committed relationship with JavaScript. I don’t think AI will steal our jobs—it’ll just join the team and ask for Fridays off. You should definitely hire me… before I build an AI that does it myself.",
    skills:
        {
            proficientWith: ['javascript', 'typescript', 'react', 'angular', 'web api', 'express.js', 'postgreSQL', 'mssql', 'git', 'github'],
            exposedTo: ['nodejs', 'python', 'oop', 'solid', 'acid']//OOP, SOLID, ACID
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🧑‍🍳'
        }

    ],
    portfolio: [ 
        {
            title: "Portfolio website for a Fashion Designers",
            live: "https://tonima.vercel.app/", 
            source: "https://tonima.vercel.app/",
            image: mock1
        },
        {
            title: "Weather app",
            live: "https://weather-angular-saiful.vercel.app/",
            source: "https://github.com/saifulIslamSourceCode/weather-angular",
            image: mock2
        }
    ]
}