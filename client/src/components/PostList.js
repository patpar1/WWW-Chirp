import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchPosts } from '../actions/postActions'

import { Post } from "./Post"

/* Component for storing all Post components */
export const PostList = () => {
    // useSelector hooks for getting post information from store
    const posts = useSelector(state => state.posts.posts)
    const postStatus = useSelector(state => state.posts.status)
    const error = useSelector(state => state.posts.error)

    // Dispatch hook
    const dispatch = useDispatch()

    // useEffect hook for fetching the posts on start
    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    // Maps all comments to their parent posts
    const listToTree = list => {
        let map = {}
        let node
        let roots = []
        let i

        for (i = 0; i < list.length; i++) {
            map[list[i]._id] = i
            list[i].replies = []
        }

        for (i = 0; i < list.length; i++) {
            node = list[i]
            if (node.parent !== null) {
                list[map[node.parent]].replies.push(node)
            } else {
                roots.push(node)
            }
        }
        return roots
    }

    let content

    // Shows the status on the postlist component
    if (postStatus === 'loading') {
        content = <div className="loader">Loading...</div>
    } else if (postStatus === 'succeeded') {
        const sortedPosts = listToTree(posts).slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        content = sortedPosts.map(post => (<Post key={post._id} {...post} />))
    } else if (postStatus === 'error') {
        content = <div className="error">{String(error)}</div>
    }

    return (
        <div>
            {content}
        </div>
    )
}