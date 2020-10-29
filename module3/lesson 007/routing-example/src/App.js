import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import BabyYoda from './BabyYoda';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <header>
        <Link to='/profile'>Profile</Link>
        <Link to='/cats'>Cats</Link>
        <Link to='/profile/baby-yoda'>Baby Yoda</Link>
      </header>

      <Route path='/cats'>
        <i>This is our cat page</i>
      </Route>

      <Route path='/profile'>
        <div>profile submenu</div>
      </Route>

      <Switch>
      <Route exact path='/profile'>
        <div>This is our profile</div>
      </Route>
          <Route path='/profile/baby-yoda' component={BabyYoda} />
          <Route path='/profile/:profileName' component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
