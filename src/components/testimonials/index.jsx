import { useState } from 'react'
import styles from './testimonials.module.scss'
import Fade from 'react-reveal/Fade';
const Testimonials = ()=>{
  const [email, setEmail] = useState(false)
  const data = [
    {
      name: 'Martin Amato',
      position: 'Technical Owner in Galicia',
      image:'picMartin.jpg',
      email: 'martin.amato@bancogalicia.com.ar',
      linkedin: 'https://www.linkedin.com/in/martin-amato-a1655aa8/',
      feature: false,
      testimonial: 
      <>
        "Excellent learning new things in a short time, applying the knowledge in his day-to-day work life..."
      </>
    },
      {
      name: 'Bárbara García',
      position: 'Product Owner in Galicia',
      image:'picBarbi.jpg',
      email: 'barbara.m.garcia@bancogalicia.com.ar',
      linkedin: 'https://www.linkedin.com/in/b%C3%A1rbara-garc%C3%ADa-57a4278a/',
      feature: false,
      testimonial: 
        <>
         "Always in a good mood and willing to help others. His colleagues are very happy with him..."
        </>
    },
    {
      name: 'Heraldo Gerber',
      position: 'Liliana\'s IT Manager',
      image: 'picHeraldo.jpg',
      email: 'hgerber@liliana.com.ar',
      linkedin: 'https://www.linkedin.com/in/heraldogerber/',
      feature: false,
      testimonial: 
        <>
          "He is comfortable with changes. Sees difficulties as challenges to overcome..."
        </>
    },
    {
      name: 'Ariel Goldbarg',
      position: 'Goldvarg Consultant\'s CEO',
      image: 'picAriel.jpg',
      email: 'ariel@goldvarg.com.ar',
      linkedin: 'https://www.linkedin.com/in/arielgoldvarg/',
      feature: false,
      testimonial: 
        <>
          "Very quick adaptation to the corporate culture. Responsible and committed..."
        </>  
    }
  ]
  const emailCopied = (email) =>{
    navigator.clipboard.writeText(email).then();
    setEmail(true)
    setTimeout(()=>{setEmail(false)},5000)
  }
  return (
    <Fade>
      <div className={styles.testimonials} id={'testimonials'}>
        <div className={email ? styles.emailCopied : styles.nonVisibile}> 
          Email copied 
        </div>
        <h1> Testimonials </h1>
        <div className={styles.container}>
          {
            data.map((person)=>{
              return(
                <div key={person.name} className={person.feature ? `${styles.card} ${styles.featured} ` : styles.card }>
                  <div className={styles.top}>
                    <img 
                      src={'assets/emailLogo2.png'} 
                      alt={''} 
                      className={styles.left}
                      onClick={()=>emailCopied(person.email)}
                    />
                    <img src={'assets/' + person.image } alt={''} className={styles.user}/>
                    <a href={person.linkedin} rel={'noreferrer'} target={'_blank'}>
                      <img src={'assets/linkedin.png'} alt={''} className={styles.right}/>
                    </a>
                  </div>
                  <div className={styles.center}>
                    {person.testimonial}
                  </div>
                  <div className={styles.bottom}>
                    <h3>
                      {person.name}
                    </h3>
                    <h4>
                      {person.position} 
                    </h4>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </Fade>
  )
}
export default Testimonials