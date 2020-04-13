import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import WriteStuffPage from '../WriteStuffPage/WriteStuffPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>Sing, Muse</header> 
        <Switch>
          <Route exact path='/' render={() => 
            <WriteStuffPage
              handleLogout={this.handleLogout}
              user={this.state.user}
            />    
          } />
          <Route exact path='/signup' render={({ history }) => 
            <SignUpPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/login' render={() =>
            <LoginPage
            />
          } />
        </Switch>
      </div>
    )
  }
}

export default App;