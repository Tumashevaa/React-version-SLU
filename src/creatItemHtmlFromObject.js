
// /**
//  * данная функция получает 3 параметра
//  * делает проверку на наличие url
//  * создает html строку на основе параметров
//  * @param {string} title - название социалки
//  * @param {string|null} url - ссылка на пользователя в социалке
//  * @param {string=} username - никнейм пользователя в социалке
//  * @returns {string} html
//  */
// function CreateHtmlForSocialBlocks(title, url, username) {
// if (!url) {
//     return ''
// }
// return `<div> ${title}: <a href='${url}' target="_blank">${username ? `@${username}` : url}</a></div>`
// }

// /**
//  * Пример:
//  * const result = createItemHtmlFromObject(
//  *   {
//  *     likes: 12,
//  *     height: 123,
//  *     width: 124,
//  *     description:'sdfghjkl',
//  *     created_at: '2022-03-31T10:47:51-04:00',
//  *     color: 'green',
//  *     urls: {
//  *       portfolio_url: 'https://images.unsplash.com/photo1',
//  *       small_s3: 'https://images.unsplash.com/photo1',
//  *       full: "https://images.unsplash.com/photo-1648737965997"
//  *     },
//  *     user: {
//  *       portfolio_url: 'https://www.anya.com',
//  *       name:'fghjk',
//  *       username: 'fghjk',
//  *       bio:'SEDFGHBJNKML',
//  *       profile_image: {
//  *         large: 'https://images.unsplash.com/photo1'
//  *       },
//  *       social: {
//  *         twitter_username:'bnjk',
//  *         instagram_username: 'fghjkl;',
//  *       }
//  *     }
//  *   }
//  * )
//  * 
//  * функция создает строку с html из объекта с данными
//  * @param {object} el - данные о фотографии
//  * @returns {string} - html разметка о фотографии
//  */
// function CreateItemHtmlFromObject(el) {

//     const description = el.description || 'No description'
//     const bioHtml = el.user.bio || 'No Bio'

//     const portfolioHtml = CreateHtmlForSocialBlocks(
//         'Portfolio',
//         el.user.portfolio_url
//     )

//     const instaHtml = CreateHtmlForSocialBlocks(
//         'Instagram',
//         el.user.social.instagram_username ? `https://instagram.com/${el.user.social.instagram_username}` : null,
//         el.user.social.instagram_username
//     )

//     const twitterHtml = CreateHtmlForSocialBlocks(
//         'Twitter',
//         el.user.social.twitter_username ? `https://twitter.com/${el.user.social.twitter_username}` : null,
//         el.user.social.twitter_username
//     )

//         return `
    //     <div className="mosaic-item" style="aspect-ratio: ${el.width}/${el.height};background-color: ${el.color};">
    //     <div className='additirial-info hide' data-additionalInfo='${el.id}'>
    //     </div>
    //     <a href="${el.urls.full}" data-img data-pswp-width="${el.width}" data-pswp-height="${el.height}" title="${description}" target="_blank">
    //         <img className="mosaic-img" src="${el.urls.small_s3}" alt="">
    //     </a>

    //     <div class="mosaic-infoTop mosaic-text">
    //         <button class="btn-like" title="Like" data-like="${el.likes}">
    //         <svg data-svgLike width="32" height="32" class="svg-like" viewBox="0 0 32 32" version="1.1" aria-hidden="false" fill="#767676"><path data-path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path></svg>
    //         </button>
            
    //         <div class='mosaic-likes'>💔 <span data-mosaicLikes>${el.likes}</span></div>
    //     </div> 

    //     <div class="mosaic-infoBottom mosaic-text">
    //         <a class="avatar-name" href='https://unsplash.com/@${el.user.username}' target="_blank">
    //         <img class='mosaic-avatar' title="${bioHtml}" src="${el.user.profile_image.large}" alt="">
    //         ${el.user.name}
    //         </a>
    //         ${instaHtml}
    //         ${twitterHtml}
    //         ${portfolioHtml}
    //         <div>
    //         <button id='Info' class='btnItemById' data-btnItemById='${el.id}' title="Additirial info">Info</button>
    //         </div>
    //     </div>
    //     </div>
    // `
// }

// export default CreateItemHtmlFromObject