import videoBG from '../imgs/video_bg.mp4'
import Navbar from './navbar';

export default function Home() {

    return (
      <div className="homepage_container">
        {/* Load in the Navigation bar */}
        <Navbar/>
        {/* Load in the video background */}
        <div className="home_overlay"></div>
        <video className='background' src={videoBG} autoPlay loop muted />
        {/* Display the content */}
        <div className="homepage_content">
          <h1>Welcome To My Portfolio!</h1>
        </div>
      </div>
    )
}
  