import React from 'react';
import './AcceptOrRejectBtns.css'

const AcceptOrRejectBtns = (props) => (
<div className="AcceptOrRejectBtns">
    <button 
        className="purple btn-small" 
        onClick={() => props.handleTimerStart()}>
            <i className="material-icons left">check_circle</i>
            accept
    </button>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <button 
        className="purple btn-small"
        onClick={() => props.handleGetRandomWords()}>
            <i className="material-icons right">close</i>
            reject
    </button>
</div>
)

export default AcceptOrRejectBtns;