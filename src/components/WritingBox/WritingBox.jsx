import React, { Component } from 'react';
import { withRouter } from "react-router";
import './WritingBox.css';

class WritingBox extends Component {

    state = {
        title: '',
        content: '',
        isTiming: this.props.isTiming
    };

    handleWriting = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddToWritings(this.state);
        this.props.history.push('/writings');
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.isTiming !== this.state.isTiming) {
          this.setState({ isTiming: nextProps.isTiming });
        }
    }

    render() {
        return(
            <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input 
                                onChange={this.handleWriting} 
                                value={this.state.title} placeholder="If you wanna keep me, give me a title!" 
                                name="title" />
                            <textarea 
                                className="writeStuff-textarea" name="content"
                                onChange={this.handleWriting} 
                                value={this.state.content} 
                                disabled={!this.state.isTiming}
                                placeholder="start writing here :)" >
                            </textarea>
                        </div>
                    </div>
                    <button className="waves-effect purple btn-large"> 
                        <i className="material-icons left">add</i> 
                        Add To Writings
                    </button>
                </form>
            </div>
        );
    }
}

export default withRouter(WritingBox);

