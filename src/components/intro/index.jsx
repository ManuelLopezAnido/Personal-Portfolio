import styles from './intro.module.scss'
import { useEffect , useRef, useState} from 'react'
import { init } from 'ityped'
import Fade from 'react-reveal/Fade';
import Loading from './loading';
const Intro = ()=>{
  const [imageLoaded, setImageLoaded] = useState(false);
  const textRef = useRef()
  useEffect (()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      startDelay: 3000,
      loop:false,
      strings: ['Frontend', 'Backend','Developer']
    });
  },[])

  const handleImageLoad = () => {
    setImageLoaded(true);
  }
  return (
    <div className={styles.intro} id={'intro'}>
      <Fade big>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <img className={imageLoaded ? "" : styles.notVisible} src={'assets/manu3Pic.png'} alt={''} onLoad = {handleImageLoad} /> 
            {!imageLoaded && <Loading className={styles.loading}/>}
          </div>
        </div>
      </Fade>
      <Fade big>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2>
              Hi there, I'm
            </h2>
            <h1>
              Manuel Lopez Anido
            </h1>
            <h3>
              Engineer and <span className={styles.span} ref={textRef}></span>
            </h3>
          </div>
          <a href={'#portfolio'}>
            <img src={'assets/arrowDown.png'} alt={'ArrowDown'}/>
          </a>
        </div>
      </Fade>
    </div>
  )
}
export default Intro