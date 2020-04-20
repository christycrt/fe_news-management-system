import React from 'react'
import PeviewNews from '../../Page/NewsDetail'

export default function PreviewNews(props) {
    return (
        <div className='pt-3'>
            <p className='text-center'>Preview News</p>
            <PeviewNews News={props.News}/>
        </div>
    )
}