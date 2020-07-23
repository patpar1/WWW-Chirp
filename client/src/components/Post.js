import React, { useState } from 'react'
import { IconContext } from "react-icons";
import { FaReply } from "react-icons/fa";
import { Media } from "react-bootstrap";

import { PostReplyContainer } from "./PostReplyContainer";
import avatar from "../avatars/avatar1.png"

export const Post = ({_id, name, content, replies, parent, createdAt}) => {
    const [replyScreen, setReplyScreen] = useState(false)

    const replyClicked = () => {
        setReplyScreen(!replyScreen)
    }

    return (
        <div className={parent === null ? "p-3 w-100 shadow mb-4 bg-white rounded" : "pl-3 pt-4 w-100"}>
            <Media>
                <img className="mr-3" width={64} height={64} src={avatar} alt="Avatar" style={{
                    "verticalAlign": "middle",
                    "borderRadius": "50%"
                }} />
                <Media.Body>
                    <h5>{name}</h5>
                    <p className="mb-1">{content}</p>
                    <div>
                        <IconContext.Provider value={{ className: "mt-3 mr-4" }}>
                            <FaReply color={replyScreen ? 'blue' : 'black'} onClick={replyClicked}/>
                        </IconContext.Provider>
                        <small className="text-muted float-right mt-3 align-bottom">{new Date(createdAt).toLocaleString()}</small>
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