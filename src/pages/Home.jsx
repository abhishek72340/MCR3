import {useEffect} from "react";

import SortBy from "../components/SortBy.jsx";
import Sidebar from "../components/Sidebar.jsx";
import AllPosts from "../components/AllPosts.jsx";

const Home = () => {

    useEffect(()=>{
        window.scrollTo({top: 0, left: 0});
    },[])

    return (
        <div className={'home-main flex gap-5 sm:justify-start lg:justify-center items-start lg:gap-4 p-2 sm:pl-0 relative'}>
            <Sidebar/>
            <div className="posts w-full md:w-1/2 lg:w-[45%] pt-4 sm:pt-10 flex flex-col md:flex-1 lg:flex-none gap-4">
                <AllPosts/>
            </div>
            <SortBy/>
        </div>
    );
};

export default Home;