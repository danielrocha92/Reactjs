import React from 'react';
import './ChatListItem.css';

export default () => {
    return (
        <div className='chatListItem'>
            <img className='charListItem--avatar' src="https://www.w3schools.com/howto/img_avatar2.png" alt='' />
            <div className='charListItem--lines'>
                <div className='charListItem--line'>
                    <div className='charListItem--name'>Daniel Rocha</div>
                    <div className='charListItem--date'>19:00</div>
                </div>
                <div className='charListItem--line'>
                    <div className='charListItem--lastMsg'><p>Opa, tudo bem?</p></div>
                </div>
            </div>

        </div>
    );
}