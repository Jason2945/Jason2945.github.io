import React from "react";
import { Chrono } from "react-chrono";
import { journeyInfo } from "./database/journey_info";
import background_img from "../imgs/background.gif"
import Navbar from './navbar';

export default function Journey(){
    return (
        <div className="journey_container">
            {/* Load in the Navigation bar */}
            <Navbar/>
            {/* Load in the video background */}
            <div className="project_overlay"></div>
            <img className='background' src={background_img} />
            {/* Load in the content */}
            <div className="timeline">
                <Chrono 
                    items={journeyInfo}
                    mode="VERTICAL_ALTERNATING"
                    disableToolbar='true'
                    theme={{
                        primary: 'yellow',
                        secondary: 'none',
                        cardBgColor: 'none',
                        titleColor: 'aquamarine',
                        titleColorActive: 'yellow',
                        cardTitleColor: '#F4AC45',
                        cardSubtitleColor: '#DAD6D6',
                        cardDetailsColor: '#DAD6D6',   
                      }}
                    cardWidth={700}
                    fontSizes={{
                        cardSubtitle: '1.3rem',
                        cardTitle: '2rem',
                        title: '2rem',
                    }}
                />
            </div>
            
        </div>
    )
}