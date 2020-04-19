import React from 'react';

function WritingCard({ writing, handler }) {
    return (
        <div className="row" onClick={handler}>
            <div className="col s12 m6 l4 xl3">
                <div className="card purple">
                    <div className="card-content white-text">
                        <span className="card-title">{writing.title}</span>
                        <p> {writing.content}</p>
                    </div>
                    <div className="random-words">
                        {writing.randomWords}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WritingCard;