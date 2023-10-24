import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import News from './components/News';
import Residents from './components/Residents';

function App() {

  useEffect(() => {
    // This function will run when the component is first loaded
    console.log('App.....Page has been refreshed or loaded for the first time');
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        {/* <Route path="/" component={Home} exact /> */}
        <Route path="/pms" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/residents" component={Residents} />
        <Route component={Error} />
      </Switch>
      <News />
    </div>
  );
}

export default App;
