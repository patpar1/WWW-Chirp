import React from 'react'
import { IconContext } from "react-icons";
import { FaHeart, FaReply } from "react-icons/fa";

import { Media } from "react-bootstrap";

export const Post = ({ userName, content, replies}) => {
    return (
        <div className="p-3 w-100 shadow-sm mb-4 bg-white rounded">
            <Media>
                <img width={64} height={64} className="mr-3" data-src="holder.js/64x64" alt="64x64"/>
                <Media.Body>
                    <h5>{userName}</h5>
                    <p className="mb-1">{content}</p>
                    <div>
                        <IconContext.Provider value={{ className: "mr-4" }}>
                            <FaHeart />
                            <FaReply />
                        </IconContext.Provider>
                    </div>
                    {replies && replies.length > 0 
                        ? replies.map(reply => (<Post key={reply._id} {...reply} />))
                        : null}
                </Media.Body>
            </Media>          
        </div>
    )
}