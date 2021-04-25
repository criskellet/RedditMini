// RedditPreviews.js
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    selectRedditPosts,
    isLoadingRedditPosts
} from './redditPreviewsSlice';
import Post from '../../components/Posts/Posts.js';


export const RedditPosts = () => {
    console.log("RedditPosts");
    //const dispatch = useDispatch();
    const redditPosts = useSelector(selectRedditPosts);
    const isLoading = useSelector(isLoadingRedditPosts);

    console.log(redditPosts);
    

    if (isLoading) {
        return <div> Loading Reddit posts...</div>;
    }
    if (redditPosts === 'undefined') {
        return;
    }
    if (!redditPosts) {
        return;
    }
    console.log(`Number of keys : ${Object.keys(redditPosts).length}`);
    Object.values(redditPosts).map((post) => (console.log(`post - ${post}`)));

    return (
        <section className='articles-container'>
            <h2> In RedditPosts</h2>
            <h2 className='section-title'> Posts </h2>
            {Object.values(redditPosts).map((post) => (
                <Post key={post.id} 
                      post={post}
                />
            ))}
        </section>
    );
};
