import { Link, Outlet, useLocation } from 'react-router-dom';
import background_img from "../imgs/background.gif"
import Navbar from './navbar.jsx';

export default function Projects(){

    // Check current route location
    const location = useLocation();

    return (
        <div className="Projects">
            {/* Load in the Navigation bar */}
            <Navbar/>
            {/* Load in the Background */}
            <div className="Background_Overlay"></div>
            <img className='Background' src={background_img} />

            {/* Load in the content */}
            <div className="Project_Links">
                <Link to={'/projects/1'}>
                    <button>My Porfolio</button>
                </Link>

                <Link to={'/projects/2'}>
                    <button>JavaScript Calculator</button>
                </Link>

                <Link to={'/projects/3'}>
                    <button>Old School Space Shooter</button>
                </Link>

                <Link to={'/projects/4'}>
                    <button>Not Netflix Project</button>
                </Link>

                <Link to={'/projects/5'}>
                    <button>Coming Soon</button>
                </Link>
            </div>

            {<Outlet/>}
         </div>
    )
}