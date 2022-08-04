import React from 'react'
import Header from '../../Components/Header/Header'
import MenuNav from '../../Components/Menu/MenuNav'

const Profile = () => {
    return(
        <div>
            <Header title={'Meu perfil'} />
            <MenuNav page={"profile"} />
        </div>
    )
}

export default Profile