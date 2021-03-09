import React, { Fragment, useState } from 'react';


const NewProject = () => {

    //state para el proyecto
    const [project, handleProject] = useState({
        name: '',
    });

    //Extraemos el nombre del proyecto
    const { name } = project;

    //Lee  el contenido de los input
    const onChange = e => {
        handleProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    //Cuando el usuario da click
    const onSubmit = e => {
        e.preventDefault();


        //Validamos el Proyecto

        //Agregamos el proyecto al state

        //Reiniciamos el form
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-primary btn-block-small"
            >New Project</button>

            <form
                className="new-project-form"
                onSubmit={onSubmit}
            >
                <input
                    type="text"
                    className="input-text"
                    name="name"
                    placeholder="Project name..."
                    value={name}
                    onChange={onChange}
                />

                <input
                    type="submit"
                    className="btn btn-block btn-primary"
                    name="name"
                    value="Add Project"
                />  

            </form>
        </Fragment>
    );
}
 
export default NewProject;