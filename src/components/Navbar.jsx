import {useNavigate} from "react-router-dom";


const Navbar = () => {

    const navigate = useNavigate()

    return (
        <>
            <nav className={'navbar-main bg-blue-300 py-3 sticky top-0 z-10 border-b-[0.5px] border-white/10 pl-10'}>
                <div className="logo text-2xl cursor-pointer" onClick={()=>navigate('/')}>
                    MyForum
                </div>
            </nav>
        </>
    );
};

export default Navbar;