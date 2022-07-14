function SocialBlock({userInsta, userTwitter}) {
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
        </div>
    )
}

// const portfolioHtml = createStringForSocialBlocks(
    //     'Portfolio',
    //     props.user.portfolio_url
    // )

export default SocialBlock