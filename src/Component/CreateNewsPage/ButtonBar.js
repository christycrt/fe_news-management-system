import React from 'react'

export default function ButtonBar(props) {
    return (
        <div className="container">
            <div className="col-12 p-0 d-flex justify-content-between">
                <button className="btn btn-danger">Previous</button>
                <button className="btn btn-success" onClick={props.Next}>Next</button>
            </div>
        </div>
    )
}