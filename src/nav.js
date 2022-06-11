function Navigation(props) {
  return (
    <header className="header">
      <nav className='App-nav'>
        <svg width="32" height="32" viewBox="0 0 32 32" version="1.1" aria-labelledby="unsplash-home" aria-hidden="false">
          <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
        </svg>
        <div className="space"></div>
        <p className="siteName">
        {props.siteName}
        </p>
      </nav>
    </header>
  )
}

export default Navigation





