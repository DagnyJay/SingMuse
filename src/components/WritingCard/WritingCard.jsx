import React from 'react';

function WritingCard({ writing }) {
    return (
        <div class="row">
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">{writing.title}</span>
                        <p> {writing.content}</p>
                    </div>
                    <div class="random-words">
                        {writing.randomWords}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WritingCard;