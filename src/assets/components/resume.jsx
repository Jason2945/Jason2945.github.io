import resume_img from "../imgs/resume_img.png"
import resume_download from "../imgs/resume.pdf"
import download_img from "../imgs/svg_imgs/download_logo.svg"

import background_img from "../imgs/background.gif"
import Navbar from './navbar';

export default function Resume(){
    return(
        <>
            <div className="Resume">
                <Navbar/>
                <div className="Background_Overlay"></div>
                <img className='Background' src={background_img} />

                <div className="Resume_Content">
                    <a className="Resume_Img" href={resume_img} target="_blank">
                        <img src={resume_img} alt="My_Resume"/>
                    </a>

                    <a className="Download_Resume" href={resume_download} download>
                        <img src={download_img} />
                    </a>
                </div>
            </div>
        </>
        
    )
}