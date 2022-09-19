import styles from './App.module.scss'
import Topbar from './components/topbar'
import Menu from './components/menu'
import Intro from './components/intro';
import Portfolio from './components/portfolio';
import Works from './components/works';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import {useState} from 'react'
function App() {
  const [topbarActive, setTopbarActive] = useState(false)
  return (
    <div className={styles.app}>
      <Topbar
        barActive={topbarActive}
        setBarActive={setTopbarActive}
      />
      <Menu
        barActive={topbarActive}
        setBarActive={setTopbarActive}
      />
      <div className={styles.sections}>
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
