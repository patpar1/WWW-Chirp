import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

import { addNewPost } from '../actions/postActions';

/* Component for creating a new post */
export const CreatePost = () => {
    // Set react useState hooks for storing component states
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const [validated, setValidated] = useState(false)

    // Dispatch hook
    const dispatch = useDispatch()

    // Content change functions
    const onNameChanged = e => {
        setName(e.target.value)
    }

    const onContentChanged = e => {
        // Max length for a post is 180 letters so the content value
        // is set to the first 180 letters
        setContent(e.target.value.substring(0, 180))
    }

    // Submit function
    const onSubmitClicked = e => {
        e.preventDefault()
        const form = e.currentTarget;
        // Check the form validity
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
        setValidated(true)
        // If valid dispatch the new post request
        if (name && content && addRequestStatus === 'idle') {
            setAddRequestStatus('pending')
            dispatch(addNewPost({
                name: name,
                content: content,
                likes: [],
                replies: [],
                parent: null
            }))
            // Reset states
            setContent('')
            setName('')
            setAddRequestStatus('idle')
            setValidated(false)
        }
    }

    return (
        <div className="create_post shadow-none bg-light rounded">
            <Form noValidate validated={validated} onSubmit={onSubmitClicked}>
                <Form.Group className="name">
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
                        className="submit_button d-inline-block"
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