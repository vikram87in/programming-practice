import React from 'react'

export default function DataFetchingById() {
    const [id, setId] = React.useState('');
    const [post, setPost] = React.useState({});

    const getPostById = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(json => {
                setPost(json)
            })
    }
    return (
        <div>
            <input type='text' onChange={e => setId(e.target.value)} value={id} />
            <button type='button' onClick={getPostById} dangerouslySetInnerHTML={{ __html: 'Get Post' }} />
            {post && post.title && <li>{post.title}</li>}
        </div>
    )
}
