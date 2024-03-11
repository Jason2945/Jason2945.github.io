import vite_logo from "../../imgs/svg_imgs/vite_logo.svg"
import react_logo from "../../imgs/svg_imgs/react_logo.svg"
import html_logo from "../../imgs/svg_imgs/html_logo.svg"
import css_logo from "../../imgs/svg_imgs/css_logo.svg"
import js_logo from "../../imgs/svg_imgs/js_logo.svg"

// Store the projects I have completed
export const project_database = [
    {
        name: 'My Portfolio',
        technologies: 
            <ul className="project_techs">
                <li>Vite <img src={vite_logo}/> </li>
                <li>React <img src={react_logo}/> </li>
                <li>HTML <img src={html_logo}/></li>
                <li>CSS <img src={css_logo}/></li>
                <li>JavaScript <img src={js_logo}/></li>
                <li><a href="https://react-chrono.prabhumurthy.com/"> Chrono React to make Timeline</a></li>
                <li><a href="https://www.behance.net/GenevieveLacroix/"> Background Artwork from Genevieve Lacroix</a></li>
            </ul>,
        description: "This is my Portfolio. What you are looking at!",
    },
    {
        name: 'JavaScript Calculator',
        technologies: 
            <ul className="project_techs">
                <li>HTML <img src={html_logo}/></li>
                <li>CSS <img src={css_logo}/></li>
                <li>JavaScript <img src={js_logo}/></li>
            </ul>,
        description: "This is a project I've built in the Nebula Academy SEV12 Program. This calculator will have basic functionality with some styling. Currently the code is finished, however a lot of improvements can be made as this project was done when I started learning JS.",
        link: 'https://jason2945.github.io/JS_Calculator/',
        linkText: "Try It Out Here!",
    },
    {
        name: 'Old School Space Shooter',
        technologies: 
            <ul className="project_techs">
                <li>Vite <img src={vite_logo}/> </li>
                <li>React <img src={react_logo}/> </li>
                <li>HTML <img src={html_logo}/></li>
                <li>CSS <img src={css_logo}/></li>
                <li>JavaScript <img src={js_logo}/></li>
            </ul>,
        description: 'This is a space invader game using the canvas from javascript. It will have the simple functions of shooting invaders, gaining score, and progressively more difficult fights. The game is currently completed, but I will be coming back to update the game and add more PMVP.',
        link: 'https://jason2945.github.io/Space_Invader_JS/',
        linkText: "Try It Out Here!",
    },
    {
        name: 'Not Netflix',
        technologies: '',
        description: 'I am currently working on this project. Will be updated when completed!',
        link: '',
        linkText: "",
    },
    {
        name: 'Coming Soon',
        technologies: '',
        description: 'Any interesting projects I make in the future will be updated here!',
        link: '',
        linkText: '',
    }
];