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

function InfoRow({title, children}) {
    if (children) {
        return (
            <div>{title}: {children}</div>
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
                    <InfoRow title="Date">{formatDateTime(data.created_at)}</InfoRow>
                    <InfoRow title="Camera">{data.exif.make}</InfoRow>
                    <InfoRow title="ISO">{data.exif.iso}</InfoRow>
                    <InfoRow title="Aperture">{data.exif.aperture}</InfoRow>
                    <InfoRow title="Exposure time">{data.exif.exposure_time}</InfoRow>
                    <InfoRow title="Focal length">{data.exif.focal_length}</InfoRow>
                    <InfoRow title="Country">{data.location.country}</InfoRow>
                    <InfoRow title="City">{data.location.city}</InfoRow>
                    <button onClick={() => setShowAdditionalInfo(false)} className='AdditionalInfo-btnItemById'>Esc</button>
                </React.Fragment>
            }
        </div>
    )
}

export default BtnInAdditionalInfo