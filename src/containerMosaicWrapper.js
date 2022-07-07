import React, { useState, useEffect } from 'react'

const COLUMNS = 3

function getPhotos(page) {
    return fetch(`https://api.unsplash.com/photos/?client_id=ptJ9sMq465MLUNnrewrag_75WkMawAuAFrdyxSeK_EE&page=${page}`)
        .then((response) => response.json())
}

function getPhotosById(id) {
    return fetch(`https://api.unsplash.com/photos/${id}?client_id=ptJ9sMq465MLUNnrewrag_75WkMawAuAFrdyxSeK_EE`)
     .then((response) => response.json())
}

// function dateSTR() {
    // const monthsMap = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//     const createdAt = new Date(props.createdAt)
//     const dateAt = createdAt.getDate()
//     const monthAt = createdAt.getMonth()
//     const yearAt = createdAt.getFullYear()
//     const hourAt = createdAt.getHours()
//     const minutesAt = createdAt.getMinutes()
//     return 'Date AT:' {dateAt} {monthsMap[monthAt]} {yearAt} {hourAt}{minutesAt}
// }

function formatDateTime(dateCreatedAt) {
    const monthsMap = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const createdAt = new Date(dateCreatedAt)
    const dateAt = createdAt.getDate()
    const monthAt = createdAt.getMonth()
    const yearAt = createdAt.getFullYear()
    const hourAt = createdAt.getHours()
    const minutesAt = createdAt.getMinutes()
    return `${dateAt} ${monthsMap[monthAt]} ${yearAt} ${hourAt}:${minutesAt}`
}

function GetObjectPropertyValues({label, way}) {
    if (way) {
        return (
            <div>{label}: {way}</div>
        )
    }
    return null 
}

function BtnInAdditionalInfo(props) {
    const [modeBtn, setModeBtn] = useState(false)
    const [data, setData] = useState({})
    const [isInfoLoading, setInfoLoading] = useState(false)

    const openInfo = () => {
        setInfoLoading(true)
        getPhotosById(props.id).then((data) => {
            console.log(data)
            setData(data)
            setModeBtn(true)
            setInfoLoading(false)
        }) 
    }

    return (
        <div>
            { !modeBtn &&
                <button
                    onClick={openInfo}
                    disabled={isInfoLoading}
                    className='btnItemById'
                    title="Additirial info"
                >
                    {isInfoLoading ? 'Loading' : 'Info' }
                </button>
            }
            { modeBtn &&
                <React.Fragment>
                    <GetObjectPropertyValues label="Date" way={formatDateTime(data.created_at)}/>
                    <GetObjectPropertyValues label="Camera" way={data.exif.make}/>
                    <GetObjectPropertyValues label="ISO" way={data.exif.iso}/>
                    <GetObjectPropertyValues label="Aperture" way={data.exif.aperture}/>
                    <GetObjectPropertyValues label="Exposure time" way={data.exif.exposure_time}/>
                    <GetObjectPropertyValues label="Focal length" way={data.exif.focal_length}/>
                    <GetObjectPropertyValues label="Country" way={data.location.country}/>
                    <GetObjectPropertyValues label="City" way={data.location.city}/>
                    <button onClick={() => setModeBtn(false)} className='btnItemById'>Esc</button>
                </React.Fragment>
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
                    <BtnInAdditionalInfo id={id} />
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
