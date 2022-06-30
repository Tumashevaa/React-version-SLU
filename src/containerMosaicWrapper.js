import { useState, useEffect } from 'react'

const COLUMNS = 3

function getPhotos(page) {
    return fetch(`https://api.unsplash.com/photos/?client_id=ptJ9sMq465MLUNnrewrag_75WkMawAuAFrdyxSeK_EE&page=${page}`)
        .then((response) => response.json())
}

function getPhotosById(id) {
    return fetch(`https://api.unsplash.com/photos/${id}?client_id=ptJ9sMq465MLUNnrewrag_75WkMawAuAFrdyxSeK_EE`)
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

// function DateStr({dateAt}) {
//     return (
//         <div>{dateAt}</div>
//     )
// }

// function AdditionalInfo({id}) {
//     const [info, setInfo] = useState([])
//     useEffect(() => {
//         getPhotosById(id).then((data) => {
//             setInfo(data)
//         })
//     }, [])  
    
//     return (
//         <DateStr dateAt={info.created_at}/>
//     )
// }



function BtnInfo(id) {
    const [modeBtn, setModeBtn] = useState(false)
    const openInfo = () => {
        setModeBtn(true)
    }

    function BtnEscFromAdditorialInfo() {
        const closeInfo = () => {
            setModeBtn(false)
        }
        return (
            <button onClick={closeInfo} className='btnItemById'>Esc</button>
        )
    }

    return (
        <div>
            { !modeBtn &&
            <button onClick={openInfo} className='btnItemById' title="Additirial info">Info</button>
            }
            { modeBtn &&
            <><div>Additional Info</div><BtnEscFromAdditorialInfo /></>
            }
        </div>
    )
}

function MosaicItems({ imgFullUrl, imgWidth, imgHeight, imgSmallUrl, likesCount, userName, userPic, id }) {

    return (
        <div className="mosaic-item">
            <div className='additirial-info hide'>
            </div>
            <a href={imgFullUrl} data-pswp-width={imgWidth} data-pswp-height={imgHeight} title="" target="_blank" rel="noreferrer">
                <img className="mosaic-img" src={imgSmallUrl} alt=""/>
            </a>
            
            <CounterLikes likes={likesCount}/>
            <div className="mosaic-infoBottom mosaic-text">
                <a className="avatar-name" href={`https://unsplash.com/@${userName}`} target="_blank" rel="noreferrer">
                    <img className='mosaic-avatar' title="" src={userPic} alt="" />
                    {userName}
                </a>
                <div>
                    <BtnInfo />
                </div>
            </div>
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
    const [page, setPage] = useState(1)

    useEffect(() => {
        getPhotos(page).then((data) => {
            setItems(data)
        })
    }, [])

    const handleButtonClick = () => {
        const newPage = page + 1
        setPage(newPage)
        getPhotos(newPage).then((nextData) => {
            const newData = [...items, ...nextData]
            console.log(newData)
            setItems(newData)
        })
    }

    const columnsEls = [[], [], []]
    const itemsPerColumn = Math.ceil(items.length / COLUMNS)

    for (let col = 0; col < COLUMNS; col++) {
        for (let i = 0; i < itemsPerColumn; i++) {
            const el = items[i + col * itemsPerColumn]
            if (el !== undefined ) {
                columnsEls[col].push(
                    <MosaicItems 
                        key={`${el.id}_${i}`}
                        imgFullUrl={el.urls.full}
                        imgWidth={el.width}
                        imgHeight={el.height}
                        imgSmallUrl={el.urls.small_s3}
                        likesCount={el.likes}
                        userName={el.user.username}
                        userPic={el.user.profile_image.large}
                        id={el.id}
                    />
                ) 
            } 
          
        }
    }

    return (
        <div className="container">
            <Counter/>
            <div className="mosaic-wrapper">

                <div className="mosaic-col">
                    {columnsEls[0]}
                </div>

                <div className="mosaic-col">
                    {columnsEls[1]}
                </div>

                <div className="mosaic-col">
                    {columnsEls[2]}
                </div>

            </div>

            <div className="container-btn">
                <button onClick={handleButtonClick}>Show more photos</button>
            </div>
        </div>
    )
}

export default ContainerMosaicWrapper
