import React from 'react'

export const ButtonLogin = (props) => {
    return <button className={`btn btn-${props.color} btn-block`}>{props.children}</button>
}


export const Button = (props) => {
    return <div className='btn btn-warning'>{props.children}</div>
}