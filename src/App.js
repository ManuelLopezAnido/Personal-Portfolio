import {useState} from 'react'
import styles from './App.module.scss'
import Topbar from './components/topbar'
import Menu from './components/menu'
import Intro from './components/intro';
import Portfolio from './components/portfolio';
import WorkAccenture from './components/works/accenture';
import WorkLiliana from './components/works/liliana';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import useClickOutside from './useClickOutside';


function App() {
  const [topbarActive, setTopbarActive] = useState(false)
  const myRef = useClickOutside(()=>{setTopbarActive(false)})

  return (
    <div className={styles.app}>
      <div ref = {myRef}>
        <Topbar
          barActive={topbarActive}
          setBarActive={setTopbarActive}
        />
        <Menu
          barActive={topbarActive}
          setBarActive={setTopbarActive}
        />
      </div>
      <div className={styles.sections}>
        <Intro/>
        <Portfolio/>
        <WorkAccenture/>
        <WorkLiliana />
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
