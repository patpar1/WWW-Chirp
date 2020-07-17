import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function CreatePost() {
    return (
        <div className="p-4 w-100">
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows="3" placeholder="What's on your mind?" />
                    <Form.Text className="text-muted text-right b-inline-block">
                    180/180 words
                    </Form.Text>
                    <Button variant="primary" type="submit" className="b-inline-block">Submit</Button>
                </Form.Group>
            </Form>
        </div>
    )
}
