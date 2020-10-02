import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import NoMatch from './components/noMatch';
import Register from './components/register';
import { NoteContainer } from './global/style';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path='/join' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='*' component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
