import React from 'react'
import { NavBarContainer } from './styles'

export const Navbar = ({ nombre, img }) => {

    return (
        <NavBarContainer>
            {nombre}
            <div>
                <img src={img} alt="" />
            </div>
        </NavBarContainer>
    )
}

