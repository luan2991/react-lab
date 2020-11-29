import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Counter from './components/Counter';
import Header from './components/header';
import NotFound from './components/notfound';
import ColorBox from './features/ColorBox';
import HomePage from './features/Home';
import MagicBoxFeature from './features/MagicBox';
import StudentFeature from './features/StudentsFeature';

function App() {
  return (
    <div>
      <Header />
      
      {/*ROUTING CONTENT */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/color-box" component={ColorBox} />
        <Route path="/magic-box" component={MagicBoxFeature} />
        <Route path="/counter" component={Counter} />
        <Route path="/students" component={StudentFeature} />
        <Route component={NotFound} />
      </Switch>
      <div>Created by Luan</div>
    </div>
  );
}

export default App;
