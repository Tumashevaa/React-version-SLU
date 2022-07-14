import React, { useState, useEffect } from 'react'
import BtnInAdditionalInfo from './AdditionalInfo.js'
import CounterLikes from './CounterLikes.js'
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import './ContainerMosaicWrapper.css'
import SocialBlock from './SocialBlock.js'

const COLUMNS = 3

function getPhotos(page) {
    return fetch(`https://api.unsplash.com/photos/?client_id=ptJ9sMq465MLUNnrewrag_75WkMawAuAFrdyxSeK_EE&page=${page}`)
        .then((response) => response.json())
}

function MosaicItem({ imgFullUrl, imgWidth, imgHeight, imgSmallUrl, likesCount, userName, userPic, id, description, bioHtml, userInsta, userTwitter}) {
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '[data-wrapper]',
            children: '[data-img]',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
            lightbox = null;
        };
    }, []);

    return (
        <div className="mosaic-item">
            <div className='additirial-info hide'>
            </div>
            <a data-img href={imgFullUrl} data-pswp-width={imgWidth} data-pswp-height={imgHeight} title={description} target="_blank" rel="noreferrer">
                <img className="mosaic-img" src={imgSmallUrl} alt=""/>
            </a>
            
            <CounterLikes likes={likesCount}/>
            <div className="mosaic-infoBottom mosaic-text">
                <a className="avatar-name" href={`https://unsplash.com/@${userName}`} target="_blank" rel="noreferrer">
                    <img className='mosaic-avatar' title={bioHtml} src={userPic} alt="" />
                    {userName}
                </a>
               <SocialBlock userInsta={userInsta} userTwitter={userTwitter}/>
                
                <div>
                    <BtnInAdditionalInfo id={id} />
                </div>
            </div>
        </div>
    )
}

function ContainerMosaicWrapper() {
    const [items, setItems] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        getPhotos(page).then((data) => {
            console.log(data)
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
                    <MosaicItem 
                        key={`${el.id}_${i}`}
                        imgFullUrl={el.urls.full}
                        imgWidth={el.width}
                        imgHeight={el.height}
                        imgSmallUrl={el.urls.small_s3}
                        likesCount={el.likes}
                        userName={el.user.name}
                        userPic={el.user.profile_image.large}
                        id={el.id}
                        description={el.description}
                        bioHtml={el.bioHtml}
                        userInsta={el.user.social.instagram_username}
                        userTwitter={el.user.social.twitter_username}
                    />
                ) 
            } 
          
        }
    }

    return (
        <div className="container" data-wrapper>
            <div className="mosaic-wrapper">

                <div>
                    {columnsEls[0]}
                </div>

                <div>
                    {columnsEls[1]}
                </div>

                <div>
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
