import React, { useState } from 'react';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import NotesRoundedIcon from '@mui/icons-material/NotesRounded';

function Feed() {
    const [posts, setPosts] = useState([]);
    const sendPost = (e) => {
        e.preventDefault();
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateRoundedIcon />
                    <form action="">
                        <input type="text" placeholder="Start a post" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption Icon={ImageRoundedIcon} title="Photo" iconColor="#70B5F9" />
                    <InputOption Icon={SubscriptionsRoundedIcon} title="Video" iconColor="#7FC15E" />
                    <InputOption Icon={EventNoteRoundedIcon} title="Event" iconColor="#E7A33E" />
                    <InputOption Icon={NotesRoundedIcon} title="Write an article" iconColor="#FC9295" />
                </div>
            </div>

            {/* Posts */}
            {posts.map((post) => {
                <Post />
            })}
            <Post 
                name="David Brown" 
                description="Intern at Microsoft" 
                message="WOW this worked!" 
            />
        </div>
    );
}

export default Feed;
