import { useState, useEffect } from 'react'

function getAllPhotosData(page = 1) {

    return fetch(`https://api.unsplash.com/photos/?client_id=ptJ9sMq465MLUNnrewrag_75WkMawAuAFrdyxSeK_EE&page=${page}`)
        .then((response) => response.json())
}

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick = {() => {
                setCount(count + 1)
            }} >increment</button>

            <button onClick = {() => {
                setCount(count - 1)
            }}>decrement</button>
        </div>
    )
}

// document.addEventListener('click', function(event) {
//     const isLikeButton = event.target.closest('[data-like]') !== null
//     if (isLikeButton) {
//       const btnLikes = event.target.closest('[data-like]')
//       const attributeLikesCount = btnLikes.getAttribute('data-like')
//       const parentEl = btnLikes.parentElement
//       const counterLikes = parentEl.querySelector('[data-mosaicLikes]')
//       let newLikesCount = parseInt(attributeLikesCount, 10)
  
//       if (btnLikes.classList.contains('on')) {
//         newLikesCount--
//         btnLikes.classList.remove('on')
//       } else {
//         newLikesCount++
//         btnLikes.classList.add('on')
//       }
      
//       counterLikes.innerText = newLikesCount
//       btnLikes.setAttribute('data-like', newLikesCount)
//     }
// })

function ContainerMosaicWrapper() {
    const [items, setItems] = useState([])

    const handleButtonClick = () => {
        console.log('click')
    }

    useEffect(() => {
        getAllPhotosData().then((data) => {
            setItems(data)
        })
    }, [])

    return (
        <div className="container">
            <Counter/>
            <div className="mosaic-wrapper">

                <div className="mosaic-col">
                    {items.map((el, index) => {
                        return (
                            <div className="mosaic-item">
                                <div className='additirial-info hide'>
                                </div>
                                <a href={el.urls.full} data-pswp-width={el.width} data-pswp-height={el.height} title="" target="_blank">
                                    <img className="mosaic-img" src={el.urls.small_s3} alt=""/>
                                </a>

                                <div className="mosaic-infoTop mosaic-text">
                                    <button className="btn-like" title="Like">
                                       LIKE
                                    </button>
                                    
                                    <div className='mosaic-likes'>💔 {el.likes}</div>
                                </div> 

                                <div className="mosaic-infoBottom mosaic-text">
                                    <a className="avatar-name" href={`https://unsplash.com/@${el.user.username}`} target="_blank">
                                        <img className='mosaic-avatar' title="" src={el.user.profile_image.large} alt="" />
                                        {el.user.name}
                                    </a>
                                    <div>
                                        <button className='btnItemById' title="Additirial info">Info</button>
                                    </div>
                                </div>
                            </div>
   
                        )
                    })}
                    {/* <!-- тут будет установлен контент через js -->  */}
                </div>

                <div className="mosaic-col" data-col>
                    {/* <!-- тут будет установлен контент через js -->  */}
                </div>

                <div className="mosaic-col" data-col>
                    {/* <!-- тут будет установлен контент через js -->  */}
                </div>

            </div>

            <div className="container-btn">
                <button onClick={handleButtonClick}>Показать еще</button>
            </div>
        </div>
    )
}

export default ContainerMosaicWrapper
