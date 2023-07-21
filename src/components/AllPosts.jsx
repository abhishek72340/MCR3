import PostCard from "./PostCard.jsx";
import {useGlobalPosts} from "../forumContext.jsx";

const AllPosts = () => {
    const {sortedPosts} = useGlobalPosts()

    return (
        <div className={'all-posts flex flex-col gap-3 justify-center'}>
            <h1 className={'text-2xl'}>Latest Posts</h1>
            {
                sortedPosts.map(post => (
                    <PostCard key={post.postId} post={post}/>
                ))
            }
        </div>
    );
};

export default AllPosts;
