import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './WriteStuffPage.css';

const WriteStuffPage = (props) => {
    return (
        <div className="WriteStuffPage">
            <NavBar 
                user={props.user} 
                handleLogout={props.handleLogout}
            />
        </div>
    );
}

export default WriteStuffPage;
