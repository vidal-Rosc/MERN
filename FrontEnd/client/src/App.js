import React from 'react';
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/projects/Projects';
import ProjectState from './context/projects/ProjectState';
import TaskState from './context/tasks/taskState';


function App() {
  //Todo lo que va dentro el Switch es el contenido de CADA UNA de las paginas
  //Todo lo que va fuera del switch se vera EN TODAS las paginas
  return (
    <ProjectState>
      <TaskState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/new-account" component={NewAccount} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </Router>
        </TaskState>
    </ProjectState>
  );
}

export default App;
