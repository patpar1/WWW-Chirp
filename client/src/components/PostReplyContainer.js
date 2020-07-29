import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Col, Form, Button } from 'react-bootstrap';

import { addNewPost } from '../actions/postActions'

/* Smaller ReplyContainer component for replying to a post */
export const PostReplyContainer = ( { parentID, setReplyState } ) => {
    // Set react useState hooks for storing component states
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    // Dispatch hook
    const dispatch = useDispatch()

    // Content change functions
    const onNameChanged = e => {
        setName(e.target.value)
    }

    const onContentChanged = e => {
        setContent(e.target.value.substring(0, 180))
    }

    // Submit function
    const onSubmitClicked = e => {
        e.preventDefault()
        setReplyState(false)
        // If the form is valid dispatch the new post request
        if (content && addRequestStatus === 'idle') {
            setAddRequestStatus('pending')
            dispatch(addNewPost({
                name: name,
                content: content,
                likes: [],
                replies: [],
                parent: parentID
            }))
            // Reset states
            setContent('')
            setAddRequestStatus('idle')
        }
    }

    return (
        <div className="mt-2">
            <Form>
                <Form.Row className="d-flex">
                    <Col xs="auto">
                        <Form.Control
                            className="mt-2"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={onNameChanged}
                        />
                    </Col>
                    <Col xs="auto" className="flex-grow-1">
                        <Form.Control
                            className="mt-2"
                            type="text"
                            placeholder="Reply"
                            value={content}
                            onChange={onContentChanged}
                        />
                    </Col>
                    <Col xs="auto">
                        <Button
                            className="mt-2 float-right text-center"
                            variant="primary"
                            type="submit"
                            onClick={onSubmitClicked}
                        >
                            Submit
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    )
}
