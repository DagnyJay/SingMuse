import React, { Component } from 'react';
import './AcceptOrRejectBtns.css'

const AcceptOrRejectBtns = (props) => (
<div className="AcceptOrRejectBtns">
    <a className="waves-effect green btn-large"><i className="material-icons left">check_circle</i>accept</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a className="waves-effect red btn-large"><i className="material-icons right">close</i>reject</a>
</div>
)

export default AcceptOrRejectBtns;