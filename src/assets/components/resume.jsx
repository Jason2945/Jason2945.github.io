import resume_img from "../imgs/resume_img.png"
import resume_download from "../imgs/Jason_Resume.pdf"
import download_img from "../imgs/svg_imgs/download_img.svg"

import background_img from "../imgs/background.gif"
import Navbar from './navbar';

export default function Resume(){
    return(
        <>
            <div className="resume_container">
                {/* Load in the Navigation bar */}
                <Navbar/>
                {/* Load in the video background */}
                <div className="project_overlay"></div>
                <img className='background' src={background_img} />
                <div className="resume_content">
                    <a className="resumeImgContainer" href={resume_img} target="_blank">
                        <img className="resumeImg" src={resume_img} alt="my_resume"/>
                    </a>

                    <a className="resume_download_link" href={resume_download} download>
                        <img className="resume_download" src={download_img} />
                    </a>
                </div>
            </div>
        </>
        
    )
}