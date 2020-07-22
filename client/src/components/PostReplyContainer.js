import React from 'react'
import { Form, Button } from 'react-bootstrap';

export default function PostReplyContainer() {
    return (
        <div className="container mt-2 pl-0">
            <Form className="d-flex">
                <Form.Group controlId="formBasicText" className="flex-grow-1 mb-0">
                    <Form.Control type="text" placeholder="Reply" />
                </Form.Group>
                <Button variant="primary" type="submit" className="ml-4">Submit</Button>
            </Form>
        </div>
    )
}
