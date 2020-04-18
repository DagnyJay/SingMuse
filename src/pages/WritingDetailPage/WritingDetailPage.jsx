import React from 'react';
import { withRouter } from "react-router";

function WritingDetailPage(props) {
    console.log(props);
    return (
        <div className="row">
            <div className="col s12">
                <div className="card purple lighten-3">
                    <div className="card-content white-text">
                        <span className="card-title">{props.location.state.title}</span>
                        <p> {props.location.state.content}</p>
                    </div>
                    <div className="random-words">
                        {props.location.state.randomWords}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(WritingDetailPage);
