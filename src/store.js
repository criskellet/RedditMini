// store.js
import {configureStore} from '@reduxjs/toolkit';

import redditPostsReducer from './features/RedditPreviews/redditPreviewsSlice';

export default configureStore({
    reducer: {
        redditPosts: redditPostsReducer
    }
});