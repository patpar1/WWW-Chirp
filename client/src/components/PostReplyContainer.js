import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap';

import { addNewPost } from '../actions/postActions'

export const PostReplyContainer = ( { parentID, setReplyState } ) => {
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const dispatch = useDispatch()

    const onNameChanged = e => {
        setName(e.target.value)
    }

    const onContentChanged = e => {
        setContent(e.target.value.substring(0, 180))
    }

    const canSave = content && addRequestStatus === 'idle'

    const onSubmitClicked = e => {
        e.preventDefault()
        setReplyState(false)
        if (canSave) {
            setAddRequestStatus('pending')
            dispatch(addNewPost({
                name: name,
                content: content,
                likes: [],
                replies: [],
                parent: parentID
            }))
            setContent('')
            setAddRequestStatus('idle')
        }
    }

    return (
        <div className="mt-3 pl-0">
            <Form className="d-flex">
                <Form.Control
                    className="flex-shrink-1 w-auto mb-0 mr-2"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={onNameChanged}
                />
                <Form.Control
                    className="flex-grow-1 mb-0"
                    type="text"
                    placeholder="Reply"
                    value={content}
                    onChange={onContentChanged}
                />
                <Button
                    variant="primary"
                    type="submit"
                    className="ml-4"
                    onClick={onSubmitClicked}
                >
                    Submit
                </Button>
            </Form>
        </div>
    )
}
