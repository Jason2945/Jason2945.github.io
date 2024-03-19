import background_img from "../imgs/background.gif"
import Navbar from './navbar.jsx';

export default function Home() {

    return (
      <div className="Homepage">
        {/* Load in the Navigation bar */}
        <Navbar/>
        <div className="Background_Overlay"></div>
        <img className='Background' src={background_img} />
        {/* Display the content */}
        <div className="Homepage_Content">
          <h1>Welcome To My Portfolio!</h1>
        </div>
      </div>
    )
}
  