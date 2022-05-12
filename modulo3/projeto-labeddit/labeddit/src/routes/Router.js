import React from "react"
import { Routes, Route } from "react-router-dom"
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostPage from "../pages/PostPage/PostPage"
import RegisterPage from "../pages/RegisterPage/RegisterPage"

const Router = ({setRightButtonText}) => {
    return(
        <Routes>
            <Route index element={<LoginPage setRightButtonText={setRightButtonText} />} />
            <Route path="feed" element={<FeedPage />} />
            <Route path="post" element={<PostPage />} />
            <Route path="register" element={<RegisterPage setRightButtonText={setRightButtonText} />} />
        </Routes>
    )
}

export default Router