import LogoSvg from './logo.jsx'
// import { slide as Menu } from 'react-burger-menu'
// import React, { useState } from 'react'

// class Example extends React.Component {
//   showSettings (event) {
//     event.preventDefault();
//   }

//   render () {
//     // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
//     return (
//       <Menu>
//         <a id="home" className="menu-item" href="/">Home</a>
//         <a id="about" className="menu-item" href="/about">About</a>
//         <a id="contact" className="menu-item" href="/contact">Contact</a>
//         <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
//       </Menu>
//     );
//   }
// }

function Navigation(props) {
  return (
    <header className="header">
      <nav className='App-nav'>
        <LogoSvg />
        <div className="space"></div>
        <p className="siteName">
        {props.siteName}
        </p>
        {/* <Example /> */}
      </nav>
    </header>
  )
}

export default Navigation





