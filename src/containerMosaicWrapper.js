import { useState, useEffect } from 'react'

function getAllPhotosData(page = 1) {

    return fetch(`https://api.unsplash.com/photos/?client_id=ptJ9sMq465MLUNnrewrag_75WkMawAuAFrdyxSeK_EE&page=${page}`)
        .then((response) => response.json())
}

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>{count}</p>
            <button onClick = {() => {
                setCount(count + 1)
            }} >increment</button>

            <button onClick = {() => {
                setCount(count - 1)
            }}>decrement</button>
        </div>
    )
}

function CounterLikes(props) {
    const [likes, setCountLikes] = useState(props.likes)
    return (
        <div className="mosaic-infoTop mosaic-text">
            <button className="btn-like" title="Like" onClick={() => {
               setCountLikes(likes + 1) 
            }}>LIKE
            </button>
            <div className='mosaic-likes'>💔 {likes}</div>
        </div> 
    )
}

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
                            <div className="mosaic-item" key={el.id}>
                                <div className='additirial-info hide'>
                                </div>
                                <a href={el.urls.full} data-pswp-width={el.width} data-pswp-height={el.height} title="" target="_blank">
                                    <img className="mosaic-img" src={el.urls.small_s3} alt=""/>
                                </a>

                                <CounterLikes likes={el.likes}/>
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
