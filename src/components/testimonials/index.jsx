import { useState } from 'react'
import styles from './testimonials.module.scss'
import Fade from 'react-reveal/Fade';
const Testimonials = ()=>{
  const [email, setEmail] = useState(false)
  const data = [
    {
      name: 'Heraldo Gerber',
      position: 'Liliana\'s IT Manager',
      image: 'heraldo.jpg',
      email: 'hgerber@liliana.com.ar',
      linkedin: 'https://www.linkedin.com/in/heraldogerber/',
      feature: false,
      testimonial: 
        <>
          "He is comfortable with changes. Sees difficulties as challenges to overcome..."
        </>
    },
    // {
    //   name: 'Richard Mitchell',
    //   position: 'Liliana\'s CEO',
    //   image: 'richard.jpg',
    //   email: 'mitchell@liliana.com.ar',
    //   linkedin: 'https://www.linkedin.com/in/richard-mitchell-b23283127/',
    //   feature: false,
    //   testimonial: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' +
    //                 '  Numquam odio animi debitis repellendus ' 
    // },
    {
      name: 'Vanina Pintos',
      position: 'Liliana\'s Production Manger',
      image:'vanina.jpg',
      email: 'vpintos@liliana.com.ar ',
      linkedin: 'https://www.linkedin.com/in/vanina-pintos-66ab3418/',
      feature: false,
      testimonial: 
        <>
          "Excellent learning new things in a short time, applying the knowledge in his day-to-day work life..."
        </>
    },
    {
      name: 'Walter San Marco',
      position: 'Liliana\'s Planning Manger',
      image:'walter.jpg',
      email: 'walter.sanmarco@gmail.com',
      linkedin: 'https://www.linkedin.com/in/walter-sanmarco-88b25511a/',
      feature: false,
      testimonial: 
      <>
          "Always in a good mood and willing to help others. His colleagues are very happy with him..."
      </>
    },
    {
      name: 'Ariel Goldbarg',
      position: 'Goldvarg Consultant\'s CEO',
      image: 'ariel.jpg',
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