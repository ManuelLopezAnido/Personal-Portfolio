import styles from './topbar.module.scss'
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

const Topbar = (props)=>{
  return (
    <div className={`${styles.topbar} ${props.barActive && styles.topbarActive}`}>
      <div className={styles.wrapper}>
        <div className= {styles.left}>
          <a href={'#intro'} className={styles.logo}>
            Home
          </a>
          <div className={styles.itemContainer}>
            <PersonIcon className={styles.icon}/>
            <span>
              0341 153 240353
            </span>
          </div>
          <div className={styles.itemContainer}>
            <EmailIcon className={styles.icon}/>
            <span>
              manuellopezanido@gmail.com
            </span>
          </div>
        </div>
        <>
          centro
        </>
        <div className= {styles.right}>
          <div className={styles.hamburger} onClick = {() => {props.setBarActive(!props.barActive)} } >
            <span className={styles.line1}> </span>
            <span className={styles.line2}> </span>
            <span className={styles.line3}> </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Topbar