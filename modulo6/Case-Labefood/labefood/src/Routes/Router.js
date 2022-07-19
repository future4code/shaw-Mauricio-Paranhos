import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../Pages/Login/login"
import SignUp from "../Pages/Feed/signUp"
import SignUpAdress from "../Pages/Feed/signUpAdress"
import Feed from "../Pages/Feed/feed"
import Restaurant from "../Pages/Feed/restaurant"
import Cart from "../Pages/Feed/cart"
import Profile from "../Pages/Feed/profile"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/signUp/adress" element={<SignUpAdress/>}/>
                <Route path="/feed" element={<Feed/>}/>
                <Route path="/feed/:restaurantId" element={<Restaurant/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router