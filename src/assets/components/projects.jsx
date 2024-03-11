import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';

import background_img from "../imgs/background.gif"
import Navbar from './navbar';

export default function Projects(){

    const location = useLocation();
    const [projectClicked, setProjectClicked] = useState(false);

    const click_project = () => {
        setProjectClicked(true);
    }

    return (
        <div className="project_container">
            {/* Load in the Navigation bar */}
            <Navbar/>
            {/* Load in the video background */}
            <div className="project_overlay"></div>
            <img className='background' src={background_img} />

            {/* Load in the content */}
            <div className="project_links">
                <Link to={'/projects/1'}>
                    <button onClick={click_project}>My Porfolio</button>
                </Link>

                <Link to={'/projects/2'}>
                    <button onClick={click_project}>JavaScript Calculator</button>
                </Link>

                <Link to={'/projects/3'}>
                    <button onClick={click_project}>Old School Space Shooter</button>
                </Link>

                <Link to={'/projects/4'}>
                    <button onClick={click_project}>Not Netflix Project</button>
                </Link>

                <Link to={'/projects/5'}>
                    <button onClick={click_project}>Coming Soon</button>
                </Link>
            </div>

            <div className="project_info_container" key = {location.pathname}>
                {projectClicked && <Outlet/>}
                    {location.pathname === '/projects' && (
                        <div>
                            <h2>
                                Here you can view my projects! <br></br> <br></br>
                                Click on a project to your left to view one that I've made!
                            </h2>
                        </div>
                    )}
            </div>  
         </div>
    )
}