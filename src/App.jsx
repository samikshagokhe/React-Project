import Home from './Components/home';
import Login from './Components/login';
import Jobs from './Components/jobs';
import NotFound from './Components/notFound';
import {Route, Routes} from "react-router-dom";
import ProtectedRoute from './Components/protectedRoute';
import DetailedJobsSection from './Components/detailedJobsSection';
import './App.css';

const App = ()=>(
  <Routes>

    <Route path = {"/"}  element = {<ProtectedRoute Component = {Home} />}></Route>
    <Route path = {"/login"}  element = {<Login/>}></Route>
    <Route path = {"/jobs"}  element = {<ProtectedRoute Component = {Jobs}/>}></Route>
    <Route path = {"/jobs/:id"}  element = {<ProtectedRoute Component = {DetailedJobsSection}/>}></Route>
    <Route path = {"/*"}  element = {<NotFound/>}> </Route>

  </Routes>

)


export default App;