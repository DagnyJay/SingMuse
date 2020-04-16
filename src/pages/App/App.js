import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import wordService from '../../utils/wordService';
// import tokenService from '../../utils/tokenService';

class App extends Component {
  constructor() {
    super();
    this.state = {...this.getInitialState(),
      user: userService.getUser(),
      randomWords: []
    }
  }

  getInitialState() {
    return {
      remainingTime: 600,
      isTiming: false
    };
  }

  handleGetRandomWords = async () => {
    const words = await wordService.getRandomWords();
    this.setState({
      randomWords: words
    })
  }

  async componentDidMount() {
    this.handleGetRandomWords();
  }

  handleTimerStart = () => {
    this.setState({
      isTiming: true
    });
  }

  handleTimerUpdate = () => {
    this.setState((curState) => ({remainingTime: --curState.remainingTime}));
  }

  handleTimerEnd = () => {
    if (this.state.remainingTime === 0) {
        this.setState({
        isTiming: false
      });
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
              user={this.state.user}
              randomWords={this.state.randomWords}
              remainingTime={this.state.remainingTime}
              isTiming={this.state.isTiming} 
              handleTimerUpdate={this.handleTimerUpdate} 
              handleTimerStart={this.handleTimerStart}
              handleLogout={this.handleLogout}
              handleGetRandomWords={this.handleGetRandomWords}
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
}

export default App;