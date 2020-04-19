import React from 'react';
import { withRouter } from "react-router";

function WritingDetailPage(props) {
    console.log(props);
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div className="card-panel purple lighten-3">
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
            <footer> 'Sing, Muse' by Dagny Wise, 2020</footer>
        </div>
    )
}

export default withRouter(WritingDetailPage);
