import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import './SignUpPage.css';

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className="container">
        <div className='SignUpPage'>
          <SignUpForm {...this.props} updateMessage={this.updateMessage} />
          <p>{this.state.message}</p>
        </div>
        <footer> 'Sing, Muse' is a work on progress by Dagny Wise, 2020</footer>
      </div>
    );
  }
}

export default SignUpPage;