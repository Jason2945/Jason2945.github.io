import { Link, Outlet } from 'react-router-dom';
import background_img from "../imgs/background.gif"
import Navbar from './navbar.jsx';
import { useState } from 'react';

export default function Projects(){

    const [projectOpened, setProjectOpened] = useState(false);
    const [currProject, setCurrProject] = useState('My Portfolio');

    function editInfo(data){
        setProjectOpened(!projectOpened);
        setCurrProject(data);
    }

    return (
        <div className="Projects">
            {/* Load in the Navigation bar */}
            <Navbar/>
            {/* Load in the Background */}
            <div className="Background_Overlay"></div>
            <img className='Background' src={background_img} />

            {/* Load in the content */}
            <div className="Project_Links">
                <button className='Project_Toggle' onClick={() => setProjectOpened(!projectOpened)}>
                    Current Project: {currProject}
                </button>
                <div className={`projectContainer${projectOpened ? 'Open' : ''}`}>
                    <Link to={'/projects/1'}>
                        <button onClick={() => editInfo('My Portfolio') }>My Portfolio</button>
                    </Link>

                    <Link to={'/projects/2'}>
                        <button onClick={() => editInfo('JavaScript Calculator')}>JavaScript Calculator</button>
                    </Link>

                    <Link to={'/projects/3'}>
                        <button onClick={() => editInfo('Old School Space Shooter')}>Old School Space Shooter</button>
                    </Link>

                    <Link to={'/projects/4'}>
                        <button onClick={() => editInfo('Not Netflix Project')}>Not Netflix Project</button>
                    </Link>

                    <Link to={'/projects/5'}>
                        <button onClick={() => editInfo('Coming Soon')}>Coming Soon</button>
                    </Link>
                </div>
            </div>

            {!projectOpened && <Outlet/>}
         </div>
    )
}