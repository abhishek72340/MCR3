import {AiOutlineHeart} from "react-icons/ai";
import {BiCommentDetail, BiShareAlt} from "react-icons/bi";

const CommentCard = ({post, comment}) => {
    return (
        <div className="comments">
            <div className="user flex items-center gap-2">
                <div className="profile cursor-pointer w-8 bg-red-200 h-8 rounded-full">
                    <img src={comment.picUrl} alt="logo"/>
                </div>
                <div className="user-details text-sm">
                    <div className="upper flex gap-4 items-center">
                        <p>{comment.name}<span className={'text-blue-700'}>@{comment.username}</span></p>
                        <p className={'text-sm'}>1 min</p>
                    </div>
                    <div className="commented-user flex gap-4 items-center">
                        <p>Replying To <span className={'text-blue-700'}>@{post.username}</span></p>
                    </div>
                </div>
            </div>
            <div className="comment-content pl-10 py-2">
                {post.post}
            </div>
            <div className="post-options pl-10 pr-4 mt-5 flex justify-between border-t-2 pt-2">
                <AiOutlineHeart className={'text-2xl cursor-pointer'}/>
                <BiCommentDetail className={'text-2xl cursor-pointer'}/>
                <BiShareAlt className={'text-2xl cursor-pointer'}/>
            </div>
        </div>
    );
};

export default CommentCard;