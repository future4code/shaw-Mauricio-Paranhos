export const goToLogin = (navigate) =>{
    navigate('/')
}

export const goToFeed = (navigate) =>{
    navigate('/feed')
}

export const goToRestaurant = (navigate, id) =>{
    navigate(`/feed/${id}`)
}

export const goToSignUp = (navigate) =>{
    navigate('/signUp')
}

export const goToSignUpAddress = (navigate) =>{
    navigate('/signUp/address')
}

export const goToProfile = (navigate) =>{
    navigate('/profile')
}

export const goToAddressEdit = (navigate, id) =>{
    navigate(`/addressEdit/${id}`)
}

export const goToProfileEdit = (navigate, id) =>{
    navigate(`/profile/${id}`)
}


export const goToCart = (navigate) =>{
    navigate('/cart')
}