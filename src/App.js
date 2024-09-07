import logo from './logo.svg';
import './App.css';
// import { Route, Router, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import about from './router/about';
import home from './router/home';
import dashboard from './router/dashboard';
import Navbar from './router/navbar';

const App=()=> {
  return (
    <div >

      <Router>
      <Navbar/>

        <Routes>
          <Route  path='/' exact component={home}/>
          <Route  path='/about' exact component={about}/>
          <Route path='/dashboard' exact component={dashboard}/>
        </Routes>
      </Router>

     
    </div>
  );
}

export default App;
