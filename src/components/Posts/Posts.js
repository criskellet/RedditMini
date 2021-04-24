// Post.js
import React, {useState} from 'react';

const Post = (props) => {
    console.log(`props: ${props}`);
    const post = props.post;
    console.log(`In Post: ${post.id} ${post.title}`);

    return (
        <article key={post.id}>
            <p>Title: {post.title}</p>
            <p>Author: {post.author}</p>
        </article>
    );
}; // Post component

export default Post;