import background_img from "../imgs/background.gif"
import Navbar from './navbar';

export default function Home() {

    return (
      <div className="homepage_container">
        {/* Load in the Navigation bar */}
        <Navbar/>
        {/* Load in the video background */}
        <div className="home_overlay"></div>
        <img className='background' src={background_img} />
        {/* Display the content */}
        <div className="homepage_content">
          <h1>Welcome To My Portfolio!</h1>
        </div>
      </div>
    )
}
  