import './SocialBlock.css'

// function SocialBlock({userInsta, userTwitter, urlPortfolio}) {
//     return (
//             {userInsta && <SocialBlock url={`https://instagram.com/@${userInsta}`}>@{userInsta}</SocialBlock>}
//             {userTwitter && <SocialBlock url={`https://twitter.com/@${userTwitter}`}>@{userTwitter}</SocialBlock>}
//             {urlPortfolio && <SocialBlock url={urlPortfolio}>{urlPortfolio}</SocialBlock>}
//         </div>
//     )
// }


function SocialBlock({userInsta, userTwitter, urlPortfolio}) {
    return (
        <div className="social"> 
            <div>
                {userInsta && 
                <a href={`https://instagram.com/@${userInsta}`} target="_blank" rel="noreferrer">Instagram: @{userInsta}</a>}
            </div>
            <div>
                {userTwitter && 
                <a href={`https://twitter.com/@${userTwitter}`} target="_blank" rel="noreferrer">Twitter: @{userTwitter}</a>}
            </div>
            <div>
                {urlPortfolio && 
                <a href={urlPortfolio} target="_blank" rel="noreferrer">Portfolio: {urlPortfolio}</a>}
            </div>
        </div>
    )
}


// function SocialBlock({userInsta, userTwitter, urlPortfolio}) {
//     return (
//         <div>
//             {userInsta && (
//                 <div>
//                     Instagram:{' '}
//                     <a href={`https://instagram.com/@${userInsta}`} target="_blank" rel="noreferrer">
//                         {userInsta}
//                     </a>
//                 </div>  
//             )}
            
//             {userTwitter && (
//                 <div>
//                     Twitter:{' '}
//                     <a href={`https://twitter.com/@${userTwitter}`} target="_blank" rel="noreferrer">
//                         {userTwitter}
//                     </a>
//                 </div>
//             )}

//             {urlPortfolio && (
//                 <div>
//                     Portfolio:{' '}
//                     <a href={urlPortfolio} target="_blank" rel="noreferrer">
//                         {urlPortfolio}
//                     </a>
//                 </div>
//             )}
//         </div>
//     )
// }

export default SocialBlock