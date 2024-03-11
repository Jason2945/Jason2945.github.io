import { Link, useLocation } from 'react-router-dom';

import github_logo from '../imgs/svg_imgs/github_logo.svg';
import linkedin_logo from '../imgs/svg_imgs/linkedin_logo.svg';
import gmail_logo from '../imgs/svg_imgs/gmail_logo.svg'

export default function Navbar(){

    // useLocation is to find current location
    const location = useLocation();

    return (
        <div className='Navbar'>
            {/* Links to goto different routes */}
            <div className='Navbar_Links'>
                <Link to={'/'}>
                    <button>Home</button>
                </Link>

                <Link to={'/projects'}>
                    <button>Projects</button>
                </Link>

                <Link to={'/journey'}>
                    <button>My Journey</button>
                </Link>

                <Link to={'/resume'}>
                    <button>My Resume</button>
                </Link>
            </div>

            {/* Links to logos */}
            <div className='Connect_Logos'>
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