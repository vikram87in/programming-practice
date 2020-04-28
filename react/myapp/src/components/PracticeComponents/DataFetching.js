import React, { useState, useEffect } from 'react'

export default function DataFetching() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(json => setPosts(json))
                .catch(e => {
                    console.log(e)
                })
        }

        getPosts();
    }, [])
    return (
        <div>
            {posts.length > 0 &&
                posts.map(post => {
                    return <li key={post.id}>{post.title}</li>

                })
            }
            {posts.length == 0 && <div>loading... </div>}
        </div>
    )
}
