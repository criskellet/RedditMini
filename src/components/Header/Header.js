// Header.js
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import setSearchTerm from '../../features/RedditPreviews/redditPreviewsSlice';

export const Header = () => {
    const [currentSearchTerm, setCurrentSearchTerm] = useState('');
    const searchTerm = useSelector((state) => state.redditPosts.searchTerm);
    const dispatch = useDispatch();

    const onSearchTermChange = (e) => {
        // set the current search term 
        setCurrentSearchTerm(e.target.value);
    }; //onSearchTermChange()


    // Set up the effect every time current search term changes
    useEffect(() => {
        setCurrentSearchTerm(searchTerm);
    }, [searchTerm]);

    const onSearchTermSubmit = (e) => {
        // disable default event handling
        e.preventDefault();
        console.log(`searchTerm: [${searchTerm}]`);
        console.log(`onSearchTermSubmit() : ${currentSearchTerm}`);
        //dispatch(setSearchTerm(currentSearchTerm));
        // had to specify type and playload for action object as was not working
        // just passing currentSearchTerm in as argument
        dispatch({type: 'redditPosts/setSearchTerm',payload: currentSearchTerm });
        console.log("end of onSearchTermSubmit()");
    }; //onSeachTermSubmit()

    return (
        <header >
            <div>
                <h1>Reddit Mini</h1>
            </div>
            <form className="search" onSubmit={onSearchTermSubmit}>
                <input type = "text"
                       placeholder="Search"
                       value={currentSearchTerm}
                       onChange={onSearchTermChange}
                       
                />
                <button type="submit" 
                        onClick={onSearchTermSubmit}
                        
                >
                </button>
            </form>
            
        </header>
    );
}; // Header component

