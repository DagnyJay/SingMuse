import React from 'react';
import './WritingsPage.css';
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
                    />
                )}
            </div>
        </>           
    );
}

export default WritingsPage;