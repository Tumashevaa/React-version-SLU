import LogoSvg from './logo.jsx'

function Navigation(props) {
  return (
    <header className="header">
      <nav className='App-nav'>
        <LogoSvg />
        <div className="space"></div>
        <p className="siteName">
        {props.siteName}
        </p>
      </nav>
    </header>
  )
}

export default Navigation





