import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import News from './components/News';
import Residents from './components/Residents';
import Documentation from './components/Documentation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        {/* <Route path="/" component={Home} exact /> */}
        <Route path="/pms" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/documentation" component={Documentation} />
        <Route path="/residents" component={Residents} />
        <Route component={Error} />
      </Switch>
      <News />
    </div>
  );
}

export default App;
