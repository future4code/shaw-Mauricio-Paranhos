import { useNavigate } from "react-router-dom"

export const goToFeedPage = (navigate) => {
    navigate('/')
}

export const goToLoginPage = (navigate) => {
    navigate('/login/')
}

export const goToPostPage = (navigate) => {
    navigate('/post/')
}

export const goToRegisterPage = (navigate) => {
    navigate('/register/')
}

export const goBack = (navigate) => {
    navigate(-1)
}