import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Bar = styled.nav`
    background-color: white;
    width: 100%;
    height: 50px;
`

const Navbar = (props) => {
    console.log(props.page)
    return (
        <Bar
            className="navbar navbar-light shadow-sm justify-content-between"
            {...props}
        >
            <Link to='/' className={`navbar-brand p-0 ${props.page!=='allsystem'?'d-none':''}`}>
                <img src='/image/pic news.png' width="35px" height="35px" />
                <span style={{ fontSize: "20px" }}>News Managemet</span>
            </Link>
            <div>
            </div>
            <div>
                Hi' Panupong
            <img src='/image/user-profile.png' className="ml-3" width="34px" height="34px" />
            </div>
        </Bar>
    )
}

export default Navbar