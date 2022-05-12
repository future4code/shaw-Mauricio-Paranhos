import { useNavigate } from "react-router-dom"

export const goToLoginPage = (navigate) => {
    navigate('/')
}

export const goToFeedPage = (navigate) => {
    navigate('/feed/')
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