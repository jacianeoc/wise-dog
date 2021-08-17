import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Home} from './pages/Home';
import {WiseRoom} from './pages/WiseRoom';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/wise" exact component={WiseRoom}/>
      </Switch>
    </BrowserRouter>
    );
}

export default App;
