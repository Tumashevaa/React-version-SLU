import LogoSvg from './Logo.jsx'
import './Navigation.css';

function Navigation(props) {
  return (
    <header className="App-header">
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





