import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import News from './components/News';

function App() {

  useEffect(() => {
    // This function will run when the component is first loaded
    console.log('Page has been refreshed or loaded for the first time');
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route component={Error} />
      </Switch>
      <News />
    </div>
  );
}

export default App;
