import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchPosts } from '../actions/postActions'

import { Post } from "./Post"

export const PostList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)
    const postStatus = useSelector(state => state.posts.status)
    const error = useSelector(state => state.posts.error)

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    let content

    if (postStatus === 'loading') {
        content = <div className="loader">Loading...</div>
    } else if (postStatus === 'succeeded') {
        const sortedPosts = posts.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        content = sortedPosts.map(post => (<Post key={post._id} {...post} />))
    } else if (postStatus === 'error') {
        content = <div>{error}</div>
    }

    return (
        <div>
            {content}
        </div>
    )
}