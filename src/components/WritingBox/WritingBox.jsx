import React, { Component } from 'react';
import './WritingBox.css';

class WritingBox extends Component {

    state = {
        title: '',
        content: ''
    };

    handleWriting = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddToWritings(this.state);
    }

    render() {
        return(
            <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input onChange={this.handleWriting} value={this.state.title} placeholder="If you wanna keep me, give me a title!" name="title" />
                            <textarea onChange={this.handleWriting} value={this.state.content} placeholder="start writing here :)" className="writeStuff-textarea" name="content"> </textarea>
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

export default WritingBox;