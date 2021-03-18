//Importamos el modelo de Proyectos
const Project = require('../models/Project');

exports.createProject = async ( req, res ) => {

    try {
        //Los proyectos solo van a tener un nombre
        const project = new Project(req.body);

        //Guardamos el usuario creador del Proyecto
        project.creator = req.user.id;
        //Guardamos el proyecto
        project.save();
        res.json(project);

    } catch (error) {
        console.log(error)
        res.status(500).send('An error')
    }
}