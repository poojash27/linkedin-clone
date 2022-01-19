import React from 'react';
import './Feed.css';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';

function Feed() {
  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateRoundedIcon />
                <form action="">
                    <input type="text" placeholder="Start a post" />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Feed;
