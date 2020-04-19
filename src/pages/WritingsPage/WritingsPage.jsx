import React from 'react';
import './WritingsPage.css';
import { withRouter } from "react-router";
import WritingCard from '../../components/WritingCard/WritingCard';

function WritingsPage(props) {
    if (props.writings.length) {
        return (
            <div className="container">
                <h3>My Writings</h3>
                    <div className='WritingsPage'>
                            {props.writings.map(writing => 
                                <WritingCard 
                                    key={writing._id}
                                    writing={writing}
                                    handler={() => {
                                        props.history.push({
                                            pathname: `/writings/${writing._id}`,
                                            state:writing
                                        })
                                    }}
                                />
                            )}
                    </div>
                <footer> 'Sing, Muse' by Dagny Wise, 2020</footer>
            </div>   
        );
    }
    return <h3> You haven't saved any writings yet. Try writing something!</h3>
}

export default withRouter(WritingsPage);