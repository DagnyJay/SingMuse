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
                            <textarea placeholder="Start writing here :)" cols="30" rows="20" className="writeStuff-textarea" name="content"> </textarea>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default WritingBox;