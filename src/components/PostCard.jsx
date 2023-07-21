import {BiUpArrow, BiDownArrow, BiCommentDetail, BiShareAlt, BiBookmark} from 'react-icons/bi'
import {BsFillBookmarkFill} from 'react-icons/bs'
import {useNavigate} from "react-router-dom";
import {useGlobalPosts} from "../forumContext.jsx";

const PostCard = ({post}) => {
    const {addToBookmarks, upvoteFunc, downvoteFunc} = useGlobalPosts()
    const navigate = useNavigate()

    return (
        <div className={'postcard bg-blue-50 rounded-lg p-4 flex gap-3'}>
            <div className="left flex flex-col items-center select-none">
                <div className="upvote cursor-pointer text-3xl" onClick={()=>upvoteFunc(post.postId)}><BiUpArrow/></div>
                <div className="vote-count">{post.upvotes - post.downvotes}</div>
                <div className="downvote cursor-pointer text-3xl" onClick={()=>downvoteFunc(post.postId)}><BiDownArrow/></div>
            </div>
            <div className="right">
                <div className="user flex items-center gap-2">
                    <div className="profile cursor-pointer w-8 bg-red-200 h-8 rounded-full">
                        <img src={post.picUrl} alt="logo"/>
                    </div>
                    <div className="user-details cursor-pointer flex gap-4 items-center" >
                        <p>Posted By <span className={'text-blue-700'}>@{post.username}</span></p>
                        <p className={'text-sm'}>3 min ago</p>
                    </div>
                </div>
                <div className="tags flex gap-4 pl-8 text-sm py-2">
                    {
                        post.tags.map(tag => (
                            <p key={tag} className={'bg-blue-300 rounded px-2'}>{tag}</p>
                        ))
                    }
                </div>
                <div className="text-lg cursor-pointer pl-8">
                    <h1 className={'text-xl font-bold'}>{post.post}</h1>
                    <p>{post.postDescription}</p>
                </div>
                <div className="post-options pl-8 pr-4 mt-5 flex justify-between border-t-2 pt-2">
                    <BiCommentDetail className={'text-2xl cursor-pointer'} onClick={()=>navigate(`/comment/${post.postId}`)}/>
                    <BiShareAlt className={'text-2xl cursor-pointer'}/>
                    {
                        post.isBookmarked ?
                            <BsFillBookmarkFill className={'text-2xl cursor-pointer'} onClick={()=>addToBookmarks(post.postId)}/> :
                            <BiBookmark className={'text-2xl cursor-pointer'} onClick={()=>addToBookmarks(post.postId)}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default PostCard;