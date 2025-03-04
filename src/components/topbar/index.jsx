import styles from './topbar.module.scss'
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
//import TwitterIcon from '@mui/icons-material/Twitter';

const Topbar = (props)=>{
  
  return (
      <div className={`${styles.topbar} ${props.barActive && styles.topbarActive}`}>
        <div className={styles.wrapper}>
          <div className= {styles.left}>
            <a href={'#intro'} className={styles.logo}>
              Portfolio
            </a>
            <div className={styles.itemContainer}>
              <PersonIcon className={styles.icon}/>
              <span>
                0341 153 240353
              </span>
            </div>
            <div className= {styles.itemContainer}>
              <EmailIcon className={styles.icon}/>
              <span>
                <a href = 'mailto:manuellopezanido@gmail.com'>
                  manuellopezanido@gmail.com
                </a>
              </span>
            </div>
            <div className= {`${styles.itemContainer} ${styles.email}`}>
              <EmailIcon className={styles.icon}/>
              <span>
                <a href = 'mailto:manuellopezanido@gmail.com'>
                  Email
                </a>
              </span>
            </div>
            <div className= {`${styles.itemContainer} ${styles.cv}`}>
              <ContactPageIcon className={styles.icon}/>
              <span>
                <a href={'assets/CVManuelLopezAnido.pdf'} rel={'noreferrer'} target={'_blank'} >
                  CV
                </a>
              </span>
            </div>
            <div className={styles.itemContainerSocial}>
              <a href='https://github.com/ManuelLopezAnido' rel={'noreferrer'} target={'_blank'}>
                <GitHubIcon className={styles.icon}/>
              </a>
              <a href='https://www.linkedin.com/in/manuel-lopez-anido-677a89b9/' rel={'noreferrer'} target={'_blank'}>
                <LinkedInIcon className={styles.icon}/>
              </a>
              {/* <a href='https://www.twitter.com' rel={'noreferrer'} target={'_blank'}>
                <TwitterIcon className={styles.icon}/>
              </a> */}
            </div>
          </div>
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