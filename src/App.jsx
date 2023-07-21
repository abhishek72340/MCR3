import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Comments from "./pages/Comments.jsx";

import './App.css'

function App() {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/comment/:postId'} element={<Comments/>}/>
            </Routes>
        </>
    )
}

export default App
