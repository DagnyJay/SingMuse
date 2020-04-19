import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import WritingsPage from '../WritingsPage/WritingsPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import wordService from '../../utils/wordService';
import writingService from '../../utils/writingService';
import WritingDetailPage from '../WritingDetailPage/WritingDetailPage';
// import tokenService from '../../utils/tokenService';

class App extends Component {
  constructor() {
    super();
    this.state = {...this.getInitialState(),
      user: userService.getUser(),
      writings: [],
      randomWords: []
    }
  }

  getInitialState() {
    return {
      remainingTime: 30,
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
    const writings = await writingService.getAll();
    this.setState({
      writings: writings
    })
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
        this.setState({
        isTiming: false
      });
  }

  handleSignupOrLogin = async () => {
    const writings = await writingService.getAll();
    this.setState({user: userService.getUser(), writings});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null, writings:[]});
  }

  handleAddToWritings = async writing => {
    writing.randomWords=this.state.randomWords.join(', ')
    await writingService.create(writing);
    const writings = await writingService.getAll();
    this.setState({
      writings: writings
    })
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
            userService.getUser() ?
            <HomePage
              user={this.state.user}
              randomWords={this.state.randomWords}
              remainingTime={this.state.remainingTime}
              isTiming={this.state.isTiming} 
              handleTimerUpdate={this.handleTimerUpdate} 
              handleTimerStart={this.handleTimerStart}
              handleLogout={this.handleLogout}
              handleGetRandomWords={this.handleGetRandomWords}
              handleTimerEnd={this.handleTimerEnd}
              handleAddToWritings={this.handleAddToWritings}
            /> 
            :
            <Redirect to='/login' />
          } />
          
          <Route exact path='/writings' render={() =>
          userService.getUser() ?
            <WritingsPage 
              writings={this.state.writings}
            />
            :
            <Redirect to='/login' />
          } /> 

          <Route exact path='/writings/:id' render={() =>
          userService.getUser() ?
            <WritingDetailPage />
            :
            <Redirect to='/login' />
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