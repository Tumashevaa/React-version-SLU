import logo from './logo.svg';
import './App.css';
import Navigation from './nav.js'
import ContainerMosaicWrapper from './containerMosaicWrapper'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation siteName="Unssssssssplash!"/>
        <ContainerMosaicWrapper />
        <a
          className="App-link"
          href="https://unsplash.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </header>
    </div>
  );
}

export default App;
