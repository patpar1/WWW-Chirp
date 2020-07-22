import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

import { addNewPost } from '../actions/postActions';

export const CreatePost = () => {
    const [content, setContent] = useState('')
    const [addRequestStatus, setAddrequestStatus] = useState('idle')

    const dispatch = useDispatch()

    const onContentChanged = e => {
        setContent(e.target.value.substring(0, 180))
    }

    const canSave = content && addRequestStatus === 'idle'

    const onSubmitClicked  = e => {
        e.preventDefault()
        if (canSave) {
            setAddrequestStatus('pending')
            dispatch(addNewPost({
                userName: "TODO",
                content: content,
                likes: [],
                replies: [],
                replyingTo: null
            }))
            setContent('')
        }
    }

    return (
        <div className="p-4 pb-2 w-100 shadow-none mb-3 bg-light rounded">
            <Form>
                <Form.Control
                    as="textarea"
                    rows="3"
                    placeholder="What's on your mind?"
                    value={content}
                    onChange={onContentChanged}
                />
                <Button
                    variant="primary"
                    type="submit"
                    className="mb-2 d-inline-block"
                    onClick={onSubmitClicked}
                >
                    Submit
                </Button>
                <Form.Text
                    className="text-muted float-right d-inline-block"
                >
                    {180 - content.split("").length}/180 letters
                </Form.Text>
            </Form>
        </div>
    )
}