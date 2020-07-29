import React, { useState } from 'react'
import { IconContext } from "react-icons";
import { FaReply } from "react-icons/fa";
import { Media } from "react-bootstrap";

import { PostReplyContainer } from "./PostReplyContainer";
import avatar from "../avatars/avatar1.png"

/* Post instance component */
export const Post = ({_id, name, content, replies, parent, createdAt}) => {
    // Set react useState hooks for storing component states
    const [replyScreen, setReplyScreen] = useState(false)

    // Click listener for reply button
    const replyClicked = () => {
        setReplyScreen(!replyScreen)
    }

    return (
        <div className={parent === null ? "post shadow rounded" : "post_child"}>
            <Media>
                <img className="profile_pic" src={avatar} alt="Avatar" />
                <Media.Body>
                    <h5>{name}</h5>
                    <p className="post_content">{content}</p>
                    <div>
                        <IconContext.Provider value={{ className: "icon" }}>
                            <FaReply color={replyScreen ? 'blue' : 'black'} onClick={replyClicked}/>
                        </IconContext.Provider>
                        <small className="date text-muted float-right align-bottom">{new Date(createdAt).toLocaleString()}</small>
                    </div>
                    {replyScreen ? <PostReplyContainer parentID={_id} setReplyState={setReplyScreen}/> : null}
                    {replies && replies.length > 0 
                        ? replies.map(reply => (<Post key={reply._id} {...reply} />))
                        : null}
                </Media.Body>
            </Media>          
        </div>
    )
}