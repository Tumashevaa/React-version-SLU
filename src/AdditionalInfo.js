import React, { useState } from 'react'
import './AdditionalInfo.css'

function getPhotosById(id) {
    return fetch(`https://api.unsplash.com/photos/${id}?client_id=ptJ9sMq465MLUNnrewrag_75WkMawAuAFrdyxSeK_EE`)
     .then((response) => response.json())
}

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
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false)
    const [data, setData] = useState({})
    const [isInfoLoading, setInfoLoading] = useState(false)

    const openInfo = () => {
        setInfoLoading(true)
        getPhotosById(props.id).then((data) => {
            setData(data)
            setShowAdditionalInfo(true)
            setInfoLoading(false)
        }) 
    }

    return (
        <div>
            { !showAdditionalInfo &&
                <button
                    onClick={openInfo}
                    disabled={isInfoLoading}
                    className='AdditionalInfo-btnItemById'
                    title="Additirial info"
                >
                    {isInfoLoading ? 'Loading' : 'Info' }
                </button>
            }
            { showAdditionalInfo &&
                <React.Fragment>
                    <GetObjectPropertyValues label="Date" way={formatDateTime(data.created_at)}/>
                    <GetObjectPropertyValues label="Camera" way={data.exif.make}/>
                    <GetObjectPropertyValues label="ISO" way={data.exif.iso}/>
                    <GetObjectPropertyValues label="Aperture" way={data.exif.aperture}/>
                    <GetObjectPropertyValues label="Exposure time" way={data.exif.exposure_time}/>
                    <GetObjectPropertyValues label="Focal length" way={data.exif.focal_length}/>
                    <GetObjectPropertyValues label="Country" way={data.location.country}/>
                    <GetObjectPropertyValues label="City" way={data.location.city}/>
                    <button onClick={() => setShowAdditionalInfo(false)} className='AdditionalInfo-btnItemById'>Esc</button>
                </React.Fragment>
            }
        </div>
    )
}

export default BtnInAdditionalInfo