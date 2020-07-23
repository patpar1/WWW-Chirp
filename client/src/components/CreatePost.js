import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

import { addNewPost } from '../actions/postActions';

export const CreatePost = () => {
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const [validated, setValidated] = useState(false)

    const dispatch = useDispatch()

    const onNameChanged = e => {
        setName(e.target.value)
    }

    const onContentChanged = e => {
        setContent(e.target.value.substring(0, 180))
    }

    const onSubmitClicked = e => {
        e.preventDefault()
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
        setValidated(true)
        if (name && content && addRequestStatus === 'idle') {
            setAddRequestStatus('pending')
            dispatch(addNewPost({
                name: name,
                content: content,
                likes: [],
                replies: [],
                parent: null
            }))
            setContent('')
            setName('')
            setAddRequestStatus('idle')
            setValidated(false)
        }
    }

    return (
        <div className="px-4 pt-4 pb-1 w-100 shadow-none mb-3 bg-light rounded">
            <Form noValidate validated={validated} onSubmit={onSubmitClicked}>
                <Form.Group className="mb-3">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={onNameChanged}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid name!
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group>
                    <Form.Control
                        required
                        as="textarea"
                        rows="3"
                        placeholder="What's on your mind?"
                        value={content}
                        onChange={onContentChanged}
                    />
                    <Button
                        variant="primary"
                        type="submit"
                        className="mt-3 mb-2 d-inline-block"
                    >
                        Submit
                    </Button>
                    <Form.Text
                        className="text-muted float-right d-inline-block"
                    >
                        {180 - content.split("").length}/180 letters
                    </Form.Text>
                </Form.Group>
            </Form>
        </div>
    )
}