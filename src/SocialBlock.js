import "./SocialBlock.css";

function SocialBlock({ userInsta, userTwitter, urlPortfolio }) {
  return (
    <div>
      {userInsta && (
        <StringToSocialBlock
          url={`https://instagram.com/@${userInsta}`}
          title={"Instagram"}
          userName={userInsta}
        >
          {userInsta}
        </StringToSocialBlock>
      )}
      {userTwitter && (
        <StringToSocialBlock
          url={`https://twitter.com/@${userTwitter}`}
          title={"Twitter"}
          userName={userTwitter}
        >
          {userTwitter}
        </StringToSocialBlock>
      )}
      {urlPortfolio && <div url={urlPortfolio}>Profile: {urlPortfolio}</div>}
    </div>
  );
}

function StringToSocialBlock({ url, userName, title }) {
  return (
    <div className="social">
      <a href={url} target="_blank" rel="noreferrer">
        {title}: @{userName}
      </a>
    </div>
  );
}

// function SocialBlock({userInsta, userTwitter, urlPortfolio}) {
//     return (
//         <div className="social">
//             <div>
//                 {userInsta &&
//                 <a href={`https://instagram.com/@${userInsta}`} target="_blank" rel="noreferrer">Instagram: @{userInsta}</a>}
//             </div>
//             <div>
//                 {userTwitter &&
//                 <a href={`https://twitter.com/@${userTwitter}`} target="_blank" rel="noreferrer">Twitter: @{userTwitter}</a>}
//             </div>
//             <div>
//                 {urlPortfolio &&
//                 <a href={urlPortfolio} target="_blank" rel="noreferrer">Portfolio: {urlPortfolio}</a>}
//             </div>
//         </div>
//     )
// }

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

export default SocialBlock;
