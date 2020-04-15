import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
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

  getInitialState() {
    return {
      remainingTime: "10:00",
      isTiming: true
    };
  }
  
  handleTimerUpdate = () => {
    this.setState((curState) => ({remainingTime: --curState.remainingTime}));
  }

  }
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          Sing, Muse
          <NavBar 
                user={this.state.user} 
                handleLogout={this.handleLogout}
            />
        </header> 
        <Switch>
          <Route exact path='/' render={() => 
            <HomePage
              remainingTime={this.state.remainingTime}
              isTiming={this.state.isTiming} 
              handleTimerUpdate={this.handleTimerUpdate} 
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
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
        </Switch>
      </div>
    )
  }
};

export default App;