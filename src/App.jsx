// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer'
import {useEffect} from 'react';

function App() {
  const defaultTitle = 'KyoSook Shin';

  useEffect( () => {
    document.title = defaultTitle;
  }, [defaultTitle])

  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <header>
        <title>KyoSook Shin</title>
      </header>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default App;
