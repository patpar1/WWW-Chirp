import React from 'react'
import Media from 'react-bootstrap/Media'
import { IconContext } from "react-icons";
import { FaHeart, FaReply } from "react-icons/fa";

import ReplyPost from './ReplyPost';

export default function MainPost() {
    return (
        <div className="p-4 w-100">
          <Media>
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src="holder.js/64x64"
                    alt="Generic placeholder"
                />
                <Media.Body>
                    <h5>Media Heading</h5>
                    <p className="mb-1">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus.
                    </p>
                    <div>
                        <IconContext.Provider value={{ className: "mr-4" }}>
                            <FaHeart />
                            <FaReply />
                        </IconContext.Provider>
                    </div>
                    <ReplyPost />
                </Media.Body>
            </Media>          
        </div>
    )
}
