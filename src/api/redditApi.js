// redditApi.js
export const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async(subreddit) => {
    console.log(`In getSubredditPosts: subreddit ${subreddit}`);
    console.log(`Calling : ${API_ROOT}${subreddit}.json`);
    const response = await fetch(`${API_ROOT}${subreddit}.json`);
    const json = await response.json();
    console.log(`Children : ${json.data.children}`);
    return json.data.children.map((post) => post.data);
};

export const getSubreddits = async() => {
    const response = await fetch(`${API_ROOT}/subreddits.json`);
    const json = await response.json();
    return json.data.children.map((subreddit) => subreddit.data);
};

export const getPosttPosts = async(permalink) => {
    const response = await fetch(`${API_ROOT}${permalink}.json`);
    const json = await response.json();
    return json[1].data.children.map((subreddit) => subreddit.data);
};