function SocialBlock({userInsta, userTwitter, urlPortfolio}) {
    return (
        <div>
            <div>
                {userInsta ? 'Instagram: ' : ''}
                <a href={userInsta ? `https://instagram.com/@${userInsta}` : ''} target="_blank" rel="noreferrer">
                {userInsta ? userInsta : ''}</a>
            </div>
            <div>
                {userTwitter ? 'Twitter: ' : ''}
                <a href={userTwitter ? `https://twitter.com/@${userTwitter}` : ''} target="_blank" rel="noreferrer">
                {userTwitter ? userTwitter : ''}</a>
            </div>
            <div>
                {urlPortfolio ? 'Portfolio: ' : ''}
                <a href={urlPortfolio} target="_blank" rel="noreferrer">{urlPortfolio}</a>
            </div>
        </div>
    )
}

export default SocialBlock