import React from 'react'
import Media from 'react-bootstrap/Media'
import { IconContext } from "react-icons";
import { FaHeart, FaReply } from "react-icons/fa";

export default function ReplyPost() {
    return (
        <Media className="mt-4 w-100">
            <img
                width={64}
                height={64}
                className="mr-3"
                src="holder.js/64x64"
                alt="Generic placeholder"
            />
            <Media.Body>
                <h5 className="d-inline-block">Media Heading</h5>
                <small className="ml-4"><FaReply /> TestUser</small>
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
            </Media.Body>
        </Media>
    )
}
