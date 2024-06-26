import { Link } from 'react-router-dom';
import { useState } from 'react';

import navbar_logo from '../imgs/svg_imgs/navbar_logo.svg'
import github_logo from '../imgs/svg_imgs/github_logo.svg';
import linkedin_logo from '../imgs/svg_imgs/linkedin_logo.svg';
import gmail_logo from '../imgs/svg_imgs/gmail_logo.svg'


export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='NavBar'>
            {/* Links to go-to different routes */}
            <div className='NavBar_Links'>
                <button className='NavBar_Toggle' onClick={() => setIsOpen(!isOpen)}>
                    <img src={navbar_logo}/>
                </button>
                <div className={`linkContainer${isOpen ? 'Open' : ''}`}>
                    <Link to={'/'}>
                        <button>Home</button>
                    </Link>

                    <Link to={'/projects/1'}>
                        <button>Projects</button>
                    </Link>

                    <Link to={'/journey'}>
                        <button>My Journey</button>
                    </Link>

                    <Link to={'/resume'}>
                        <button>My Resume</button>
                    </Link>
                </div>
            </div>

            {/* Links To Connect */}
            <div className='Logo_Container'>
                <a href="https://github.com/Jason2945" target="_blank">
                    <img src={github_logo}/>
                </a>

                <a href="https://www.linkedin.com/in/jason-wang-69863a176/" target="_blank">
                    <img src={linkedin_logo}/>
                </a>

                <a href="mailto:wj2945@gmail.com?subject=Contact From Portfolio">
                    <img src={gmail_logo}/>
                </a>
            </div>
        </div>
    )
}