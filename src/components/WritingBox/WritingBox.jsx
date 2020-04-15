import React, { Component } from 'react';
import './WritingBox.css';

class WritingBox extends Component {

    state = {
        content: ''
    };

    handleWriting = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return(
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea onChange={this.handleWriting} value={this.state.content} placeholder="start writing here :)" className="writeStuff-textarea" name="content"> </textarea>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default WritingBox;