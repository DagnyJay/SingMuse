import React, { Component } from 'react';
import './AcceptOrRejectBtns.css'

const AcceptOrRejectBtns = (props) => (
<div className="AcceptOrRejectBtns">
    <a class="waves-effect green btn-large"><i class="material-icons left">check_circle</i>accept</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a class="waves-effect red btn-large"><i class="material-icons right">close</i>reject</a>
</div>
)

export default AcceptOrRejectBtns;