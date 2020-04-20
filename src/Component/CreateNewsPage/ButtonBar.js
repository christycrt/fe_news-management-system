import React from 'react'

export default function ButtonBar(props) {
    return (
        <div className={`container ${props.Component === 1?"d-none":"d-block"}`}>
            <div className="col-12 p-0 d-flex justify-content-between">
                <button className="btn btn-danger" onClick={props.Previous}>
                    Previous
                </button>
                <button className={`btn btn-success`}  onClick={props.Next}>
                    Create
                </button>
            </div>
        </div>
    )
}