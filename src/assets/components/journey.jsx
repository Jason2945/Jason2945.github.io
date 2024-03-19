import React from "react";
import { Chrono } from "react-chrono";
import { Journey_Database } from "./database/journey_database";
import Background from "../imgs/background.gif"
import Navbar from './navbar';

export default function Journey(){
    return (
        <div className="Journey">
            <Navbar/>
            <div className="Background_Overlay"></div>
            <img className='Background' src={Background} />
            {/* Load in the content */}
            <div className="Timeline">
                <Chrono 
                    items={Journey_Database}
                    mode="VERTICAL_ALTERNATING"
                    disableToolbar={true}
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