// RedditHome.js
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Post from '../Posts/Posts';
import {
    fetchPosts,
    selectFilteredPosts
} from '../../features/RedditPreviews/redditPreviewsSlice';

export const RedditHome = () => {
    console.log("RedditHome");
    
    const reddit = useSelector((state) => state.redditPosts);
    const {isLoadingRedditPosts, errorLoadingRedditPosts, searchTerm, selectedSubreddit} = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit]);

    // if posts are still loading
    if (isLoadingRedditPosts) {
        return (<h2> Posts loading ...</h2>);
    }

    if (errorLoadingRedditPosts) {
        return (<h2>Failed to load posts</h2>);
    }


    // if there are no posts
    if (posts === 'undefined' || !posts) {
        return (
            <div>
                <h2> Undefined or null</h2>
            </div>
        );

    }
    
    if (!posts.length) {
        return (
            <div>
                <h2> No matchhing posts</h2>
            </div>
        );
    }
    console.log("In RedditHome posts coming up...");
    console.log(`Posts length: ${posts.length}`);
    console.log(posts);

    return (
        <>
            {posts.map((post, index) => (
                <Post key = {post.id}
                      post = {post} 
                /> 
            ))}
        </>
        
    );
};
