import React, { Component } from 'react';
import WriteStuffPage from '../WriteStuffPage/WriteStuffPage';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    }
  }


  render() {
    return (
    <div className="App">
      <header className='App-header'> Sing, Muse </header>
      <Switch>
          <Route exact path='/' render={() => 
          <WriteStuffPage />
          } />
          <Route exact path='/signup' render={({ history }) => 
          <SignUpPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} /> 
          } />
          <Route exact path='/login' render={() =>
          <LoginPage />
          } />
      </Switch>
    </div>
    )
  }
}

export default App;