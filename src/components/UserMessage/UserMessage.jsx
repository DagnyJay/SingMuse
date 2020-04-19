import React from 'react';

function UserMessage(props) {
    const isTiming = props.isTiming;
    const remainingTime = props.remainingTime;


    if(isTiming===true && remainingTime > 0) {
        return (
            <div className="user-message-writing-now">
                <p>Write until time runs out!</p>
            </div>
        );
    } else if (isTiming===false && remainingTime===0){
        return (
            <div className="user-message-writing-done">
                <p>Time's up! Well done. Save to your writings below to come back to this later.</p>
            </div>
        );
    } else if (isTiming===false && remainingTime > 0) {
        return (
            <div className="user-message-welcome">
                <p>Welcome to your SingMuse writing page! You'll see three random words below.
                    If they inspire your creative muse, click "Accept" to keep them, and begin your timer.
                    Don't worry if it's good or not - there isn't enough time :)</p>
            </div>
        );
        
    };

}   

export default UserMessage;