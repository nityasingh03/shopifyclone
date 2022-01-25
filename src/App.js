
import './App.css';
import Navbar from './components/Navbar';
import Comeone from './components/Comone';
import Cometwo from './components/Comtwo';
import Comthree from './components/Comthree';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Startfree from './components/Startfree';
function App() {
  return (
    <Router>
    <div className="App">
       <Navbar/>
       <Comeone/>
       <Cometwo/>
       <Comthree/>
       <Switch>
         <Route path="/Startfree"><Startfree></Startfree></Route>
         
        
       </Switch>
      </div>
    </Router>
  );
}

export default App;
