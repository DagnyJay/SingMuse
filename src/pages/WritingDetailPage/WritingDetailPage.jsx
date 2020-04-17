import React from 'react';

function WritingDetailPage({ writing }) {
    return (
        <div class="row">
            <div class="col s12">
                <div class="card purple lighten-3">
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

export default WritingDetailPage;