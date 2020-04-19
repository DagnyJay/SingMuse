import React from 'react';
import './WritingCard.css';

function WritingCard({ writing, handler }) {
    return (
        <div className="row" onClick={handler}>
            <div className="col s12">
                <div className="card purple">
                    <div className="card-content white-text">
                        <span className="card-title">{writing.title}</span>
                        <div className="card-content">
                            {writing.content.length > 20 ? writing.content.substring(0, 30) + "..." : writing.content}
                        </div>
                        <div className="random-words">
                            {writing.randomWords}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WritingCard;