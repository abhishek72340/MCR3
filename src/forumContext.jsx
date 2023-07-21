import {createContext, useContext, useState} from "react";

import {forumData} from "./db/forumData.js";

const forumContext = createContext()

const ForumProvider = ({children}) =>{
    const [sortBy, setSortBy] = useState('latest')
    const [posts, setPosts] = useState(forumData.posts)

    let sortedPosts = posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    if(sortBy === 'upvote'){
        sortedPosts =  posts.sort((a, b) => b.upvotes - a.upvotes);
    }else {
        sortedPosts = posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    const addToBookmarks = (id) => {
        setPosts(prevState => prevState.map(post => post.postId === id ? {...post, isBookmarked: !post.isBookmarked} : post))
    }

    const upvoteFunc = (id) => {
        setPosts(prevState => prevState.map(post => post.postId === id ? {...post, upvotes: post.upvotes + 1 } : post))
    }

    const downvoteFunc = (id) => {
        setPosts(prevState => prevState.map(post => post.postId === id ? {...post, downvotes: post.downvotes + 1} : post))
    }

    return(
        <forumContext.Provider value={{posts, setPosts, setSortBy, sortedPosts, addToBookmarks, upvoteFunc, downvoteFunc}}>
            {children}
        </forumContext.Provider>
    )
}

const useGlobalPosts = () => useContext(forumContext);

export {ForumProvider, useGlobalPosts}