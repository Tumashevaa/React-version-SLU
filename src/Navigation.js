import LogoSvg from './Logo.jsx'
import './Navigation.css';

function Navigation(props) {
  return (
    <header className="Navigation-header">
      <nav className='Navigation'>
        <LogoSvg />
        <div className="Navigation-space"></div>
        <p className="Navigation-siteName">
        {props.siteName}
        </p>
      </nav>
    </header>
  )
}

export default Navigation





