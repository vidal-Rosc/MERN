import React from 'react';
import Sidebar from '../layout/Sidebar';
import Bar from '../layout/Bar';


const Projects = () => {
    return (
        <div className="container-app">
            <Sidebar />
            <div className="main-section">
                <Bar />
                <main>
                    <div className="container-tasks">

                    </div>
                </main>    
            </div>
        </div>
    );
}
 
export default Projects;