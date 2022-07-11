import React, { useState } from 'react'


 function CounterLikes(props) {
    const [likes, setCountLikes] = useState(props.likes)
    return (
        <div className="mosaic-infoTop mosaic-text">
            <button className="btn-like" title="Like" onClick={() => {
               setCountLikes(likes + 1) 
            }}>
                <svg className='svg-like' viewBox="0 0 32 32" version="1.1" aria-hidden="false" fill="#767676">
                    <path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path>
                </svg>
            </button>
            <div className='mosaic-likes'>💔 {likes}</div>
        </div> 
    )
}

export default CounterLikes