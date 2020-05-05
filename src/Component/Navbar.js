import React from 'react'
import styled from 'styled-components'

const Bar = styled.nav`
    background-color: white;
    width: 100%;
    height: 50px;
`

const Navbar = (props) => {
    return (
        <Bar
            className="navbar navbar-light shadow-sm justify-content-between"
            {...props}
        >
            <a class="navbar-brand">Navbar</a>
            <div>
                Hi' Panupong
            <img src='/image/user-profile.png' className="ml-3" width="34px" height="34px" />
            </div>
        </Bar>
    )
}

export default Navbar