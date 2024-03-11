import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { project_database } from './database/project_database';

export default function Project_Info(){

    {/*Store the id of each project for the child paths*/}
    const { id } = useParams()

    {/*This const allows projectId to be used instead of constant id to be used when switching pages */}
    const [projectId] = useState(parseInt(id, 10) - 1);

    return(
        <div className="project_info">
            <h1>{project_database[projectId].name}</h1>
            <div className="info_container">

                <p>
                    Technologies Used: 
                    <br></br> <br></br>
                    {project_database[projectId].technologies}
                </p>

                <p id='project_description'>
                    Description: 
                    <br></br> <br></br>
                    {project_database[projectId].description}
                    <br></br> <br></br> 
                    <a className='project_link' href={project_database[projectId].link} target="_blank"> {project_database[projectId].linkText} </a>
                </p>
            </div>
        </div>
    )
}