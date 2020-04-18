import React from 'react';
import './WritingsPage.css';
import { withRouter } from "react-router";
import WritingCard from '../../components/WritingCard/WritingCard';

function WritingsPage(props) {
    return (
        <>
            <h1>My Writings</h1>
            <div className='WritingsPage'>
                {props.writings.map(writing => 
                    <WritingCard 
                        key={writing._id}
                        writing={writing}
                        handler={() => {
                            console.log('clicked');
                            props.history.push({
                                pathname: `/writings/${writing._id}`,
                                state:writing
                            })
                        }}
                    />
                )}
            </div>
        </>           
    );
}

export default withRouter(WritingsPage);