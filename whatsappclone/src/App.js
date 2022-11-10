import React from 'react';
import './App.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MoreVertIcon from '@material-ui/icon/MoreVert';

export default () => {
    return (
        <div className='app-window'>
            <div className='sidebar'>
                
                <header>
                    <img className='header--avatar' src="https://www.w3schools.com/howto/img_avatar2.png" alt=""/>
                    <div className='header--buttons'>
                        <div className='header--btn'>
                            <DonutLargeIcon style={{color: '#919191'}} />
                                
                        </div>   
                    </div>
                </header>

                <div className='search'>
                    ...
                </div>

                <div className='chatlist'>
                    ...
                </div>

            </div>
            <div className='contentarea'>
                ....
            </div> 
        </div>
    ); 
}