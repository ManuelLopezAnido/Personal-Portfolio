import styles from './intro.module.scss'
import { init } from 'ityped'
import { useEffect , useRef } from 'react'

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Intro = ()=>{
  const textRef = useRef()
  useEffect (()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      startDelay: 1000,
      loop:false,
      strings: ['Frontend', 'Backend','Developer']
    });
  },[])
  return (
    <div className={styles.intro} id={'intro'}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <img src={'assets/man.png'} alt={''}/>

         
        </div>
      </div>
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
          {/* //<ExpandMoreIcon className={styles.down} fontSize={'large'} color="black"/> */}
        </a>
      </div>
    </div>
  )
}
export default Intro