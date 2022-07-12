import React, { useState } from 'react'

function SvgLike() {
    return (
        <svg className='svg-like' viewBox="0 0 32 32" version="1.1" aria-hidden="false" fill="#767676">
            <path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path>
        </svg>
    )
}

function BtnLike(props) {
    return (
        <button onClick={props.onClick} className={props.className} title="Like">
            <SvgLike />
        </button>
    )
}

function CounterLikes(props) {
    const [likesCount, setLikesCount] = useState(props.likes)
    const [isLiked, setIsLiked] = useState(false)

    let btnClass = 'btn-like'
    if (isLiked) {
        btnClass = `${btnClass} on`
    }
    
    return (
        <div className="mosaic-infoTop mosaic-text">
            <BtnLike
                className={btnClass}
                onClick={() => {
                    setIsLiked(!isLiked)
                    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1)
                }}
            />
            <div className='mosaic-likes'>💔 {likesCount}</div>
        </div>
    )
}

export default CounterLikes
