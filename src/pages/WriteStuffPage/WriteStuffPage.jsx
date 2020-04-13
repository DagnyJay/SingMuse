import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './WriteStuffPage.css';

const WriteStuffPage = (props) => {
    return (
        <div className="WriteStuffPage">
            <NavBar user={props.user} />
            <div className="flex-h align-flex-end">
                <WriteStuffPage />

            </div>
        </div>
    );
}

export default WriteStuffPage;
