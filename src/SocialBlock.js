function SocialBlock({userInsta, userTwitter, urlPortfolio}) {
    return (
        <div>
            {userInsta && (
                <div>
                    Instagram:{' '}
                    <a href={`https://instagram.com/@${userInsta}`} target="_blank" rel="noreferrer">
                        {userInsta}
                    </a>
                </div>  
            )}
            
            {userTwitter && (
                <div>
                    Twitter:{' '}
                    <a href={`https://twitter.com/@${userTwitter}`} target="_blank" rel="noreferrer">
                        {userTwitter}
                    </a>
                </div>
            )}

            {urlPortfolio && (
                <div>
                    Portfolio:{' '}
                    <a href={urlPortfolio} target="_blank" rel="noreferrer">
                        {urlPortfolio}
                    </a>
                </div>
            )}
        </div>
    )
}

export default SocialBlock