// redditPreviewsSlice.js
import { createSelector, createSlice} from '@reduxjs/toolkit';
import { getSubredditPosts } from '../../api/redditApi';


const initialState = {
    posts: [],
    isLoadingRedditPosts: false,
    errorLoadingRedditPosts: false,
    searchTerm: '',
    selectedSubreddit: '/r/pics/'
};

export const redditPostsSlice = createSlice({
    name: 'redditPosts',
    initialState,
    reducers: {

        setPosts(state, action) {
            state.posts = action.payload;
        },

        startGetPosts(state) {
            state.isLoadingRedditPost = true;
            state.errorLoadingRedditPosts = false;
        },
        getPostsSuccess(state, action) {
            state.isLoadingRedditPosts = false;
            state.posts = action.payload;
        },
        getPostsFailed(state) {
            state.isLoadingRedditPosts = false;
            state.errorLoadingRedditPosts = true;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },

    }
    
});

export const selectRedditPosts = (state) => state.redditPosts.posts;
export const isLoadingRedditPosts = (state) => state.redditPosts.isLoadingRedditPosts;
export const {
    setPosts,
    startGetPosts,
    getPostsSuccess,
    getPostsFailed,
    setSearchTerm
} = redditPostsSlice.actions;
export default redditPostsSlice.reducer;


// Redux Think that gets posts from a subreddit
export const fetchPosts = (subreddit) => async(dispatch) => {
    try {
        console.log("Calling startGetPost()");
        dispatch(startGetPosts());
        const posts = await getSubredditPosts(subreddit);
        const postsData = posts.map((post) => ({
            ...post
        }));
        dispatch(getPostsSuccess(postsData));
    } catch (error) {
        console.log(error);
        dispatch(getPostsFailed());
    }
};

const selectPosts = (state) => state.redditPosts.posts;
const selectSearchTerm = (state) => state.redditPosts.searchTerm;
export const selectedSubreddit = (state) => state.redditPosts.selectedSubReddit;

export const selectFilteredPosts = createSelector(
    [selectPosts, selectSearchTerm],
    (posts, searchTerm) => {
        if (searchTerm !== '') {
            return posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        return posts;
    }
);