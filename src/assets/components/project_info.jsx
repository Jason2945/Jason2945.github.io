import { project_database } from './database/project_database.jsx';
import { useParams } from 'react-router-dom';

export default function Project_Info(){

    const { id } = useParams();
    const curr_project = project_database.find(project => project.id === parseInt(id, 10));

    return(
        <div className="Project_Info">
            <h1>{curr_project.name}</h1>
            <div className="Info_Container">
                <div className='Technology_Used'>
                    <h2>
                        Technologies Used:
                    </h2>
                    <p> 
                        {curr_project.technologies}
                    </p>
                </div>
                

                <div className='Project_Description'>
                    <h2>
                        Description:
                    </h2>

                    <p>
                        {curr_project.description}
                        <a href={curr_project.link} target="_blank"> {curr_project.linkText} </a>
                    </p>
                </div>
            </div>
        </div>
    )
}