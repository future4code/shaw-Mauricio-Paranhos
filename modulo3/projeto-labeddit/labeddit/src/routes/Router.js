import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostPage from "../pages/PostPage/PostPage"
import RegisterPage from "../pages/RegisterPage/RegisterPage"
import Header from "../components/Header/Header"

export const Router = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<FeedPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="post" element={<PostPage />} />
                <Route path="register" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    )
}

