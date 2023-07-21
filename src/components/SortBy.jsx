import {useGlobalPosts} from "../forumContext.jsx";


const SortBy = () => {
    const {setSortBy} = useGlobalPosts()

    return (
        <div className="sort bg-red-50 mt-10 rounded-lg p-3 hidden md:flex flex-col gap-6 md:sticky top-28 w-60">
            <h2 className={'text-lg'}>Sort By</h2>
            <select onChange={(e)=>setSortBy(e.target.value)} name="sort" id="sort" className={'bg-gray-300 p-2'}>
                <option value="latest">Latest Posts</option>
                <option value="upvote">Most upvoted</option>
            </select>
        </div>
    );
};

export default SortBy;