import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineExplore} from 'react-icons/md'
import {PiBookmarkSimpleLight} from 'react-icons/pi'
import {CgProfile} from 'react-icons/cg'
import {useNavigate} from "react-router-dom";
import {forumData} from "../db/forumData.js";

const Sidebar = () => {

    const navigate = useNavigate()

    return (
        <div className="sidebar bg-red-50 mt-10 rounded-lg h-[80vh] flex flex-col justify-between p-3">
            <div className="upper flex flex-col gap-6 w-60 py-2 pl-2 text-xl">
                <div className="navigation cursor-pointer flex items-center gap-2 font-bold" onClick={()=>navigate('/')}>
                    <AiOutlineHome/>Home
                </div>
                <div className="navigation cursor-pointer flex items-center gap-2">
                    <MdOutlineExplore/>Explore
                </div>
                <div className="navigation cursor-pointer flex items-center gap-2">
                    <PiBookmarkSimpleLight/>Bookmarks
                </div>
                <div className="navigation cursor-pointer flex items-center gap-2">
                    <CgProfile/>Profile
                </div>
            </div>
            <div className="user flex items-start gap-2">
                <div className="profile cursor-pointer w-8 bg-red-200 h-8 rounded-full">
                    <img src={forumData.picUrl} alt="avatar"/>
                </div>
                <div className="user-details cursor-pointer flex flex-col gap-1 items-start" >
                    <p>{forumData.name}</p>
                    <p className={'text-sm'}>@{forumData.username}</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;