import {useParams} from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import PostCard from "../components/PostCard.jsx";
import CommentCard from "../components/CommentCard.jsx";
import {useGlobalPosts} from "../forumContext.jsx";

const Comments = () => {
    const {postId} = useParams()
    const {posts} = useGlobalPosts()
    const post = posts.find(post=>post.postId === postId)

    return (
        <div
            className={'home-main flex gap-5 sm:justify-start pl-44 items-start lg:gap-4 p-2 relative'}>
            <Sidebar/>
            <div className="post w-full md:w-1/2 lg:w-[45%] pt-4 sm:pt-10 flex flex-col md:flex-1 lg:flex-none gap-4">
                <div className={'all-posts flex flex-col gap-3 justify-center'}>
                    <h1 className={'text-2xl'}>Latest Posts</h1>
                    <PostCard post={post}/>
                </div>
                {
                    post.comments.map(comment => (
                        <CommentCard key={comment.commentId} post={post} comment={comment}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Comments;