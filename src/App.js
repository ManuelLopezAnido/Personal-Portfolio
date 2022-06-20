import styles from './App.module.scss'
import Topbar from './components/topbar'
import Intro from './components/intro';
import Portfolio from './components/portfolio';
import Works from './components/works';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
function App() {
  return (
    <div className={styles.app}>
      <Topbar/>
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
