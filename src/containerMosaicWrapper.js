import React, { useState, useEffect } from "react";
import BtnInAdditionalInfo from "./AdditionalInfo.js";
import CounterLikes from "./counterLikes.js";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import "./ContainerMosaicWrapper.css";
import SocialBlock from "./SocialBlock.js";

const COLUMNS = 3;

function MosaicItem({
  imgFullUrl,
  imgWidth,
  imgHeight,
  imgSmallUrl,
  likesCount,
  userName,
  userPic,
  id,
  description,
  bioHtml,
  userInsta,
  userTwitter,
  urlPortfolio,
}) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "[data-wrapper]",
      children: "[data-img]",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className="ContainerMosaicWrapper-item">
      <a
        data-img
        href={imgFullUrl}
        data-pswp-width={imgWidth}
        data-pswp-height={imgHeight}
        title={description}
        target="_blank"
        rel="noreferrer"
      >
        <img className="ContainerMosaicWrapper-img" src={imgSmallUrl} alt="" />
      </a>

      <CounterLikes likes={likesCount} />
      <div className="ContainerMosaicWrapper-infoBottom text-decoration">
        <a
          className="ContainerMosaicWrapper-avatarName"
          href={`https://unsplash.com/@${userName}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="ContainerMosaicWrapper-avatar"
            title={bioHtml}
            src={userPic}
            alt=""
          />
          {userName}
        </a>
        <SocialBlock
          userInsta={userInsta}
          userTwitter={userTwitter}
          urlPortfolio={urlPortfolio}
        />

        <div>
          <BtnInAdditionalInfo id={id} />
        </div>
      </div>
    </div>
  );
}

function getPhotos(page) {
  return fetch(
    `https://api.unsplash.com/photos/?client_id=ptJ9sMq465MLUNnrewrag_75WkMawAuAFrdyxSeK_EE&page=${page}`
  ).then((response) => response.json());
}

function ContainerMosaicWrapper() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let pageFromHash = null;
    if (document.location.hash.length > 0) {
      pageFromHash = parseInt(document.location.hash.replace("#page-", ""), 10);
      setPage(pageFromHash);
    }

    getPhotos(pageFromHash ? pageFromHash : page).then((data) => {
      setItems(data);
    });
  }, []);

  const handleButtonClick = () => {
    const newPage = page + 1;
    setPage(newPage);
    document.location.hash = `page-${newPage}`;

    getPhotos(newPage).then((nextData) => {
      const newData = [...items, ...nextData];
      console.log(newData);
      setItems(newData);
    });
  };

  const columnsEls = [[], [], []];
  const itemsPerColumn = Math.ceil(items.length / COLUMNS);

  for (let col = 0; col < COLUMNS; col++) {
    for (let i = 0; i < itemsPerColumn; i++) {
      const el = items[i + col * itemsPerColumn];
      if (el !== undefined) {
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
            urlPortfolio={el.user.portfolio_url}
          />
        );
      }
    }
  }

  return (
    <div className="ContainerMosaicWrapper-container" data-wrapper>
      <div className="ContainerMosaicWrapper-mosaicWrapper">
        <div>{columnsEls[0]}</div>

        <div>{columnsEls[1]}</div>

        <div>{columnsEls[2]}</div>
      </div>

      <div className="ContainerMosaicWrapper-containerBtn">
        <button onClick={handleButtonClick}>
          Show more photos (page #{page + 1})
        </button>
      </div>
    </div>
  );
}

export default ContainerMosaicWrapper;
