import { useState } from 'react'
import styles from './testimonials.module.scss'

const Testimonials = ()=>{
  const [email, setEmail] = useState(false)
  const data = [
    {
      name: 'Heraldo Gerber',
      position: 'Liliana IT Manager',
      image: 'heraldo.jpg',
      email: 'hgerber@liliana.com.ar',
      linkedin: 'https://www.linkedin.com/in/heraldogerber/',
      feature: false,
      testimonial: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' +
                    '  Numquam odio animi debitis repellendus ' +
                    'cumque officia provident quo accusamus.',
    },
    {
      name: 'Richard Mitchell',
      position: 'Liliana CEO',
      image: 'richard.jpg',
      email: 'mitchell@liliana.com.ar',
      linkedin: 'https://www.linkedin.com/in/richard-mitchell-b23283127/',
      feature: false,
      testimonial: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' +
                    '  Numquam odio animi debitis repellendus ' +
                    'cumque officia provident quo accusamus.',
    },
    {
      name: 'Walter San Marco',
      position: 'Liliana Planning and production manger',
      image:'walter.jpg',
      email: 'walter.sanmarco@gmail.com',
      linkedin: 'https://www.linkedin.com/in/walter-sanmarco-88b25511a/',
      feature: false,
      testimonial: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' +
                    '  Numquam odio animi debitis repellendus ' +
                    'cumque officia provident quo accusamus.',
    },
    {
      name: 'Ariel Goldbarg',
      position: 'Goldvarg consultant CEO and founder',
      image: 'ariel.jpg',
      email: 'ariel@goldvarg.com.ar',
      linkedin: 'https://www.linkedin.com/in/arielgoldvarg/',
      feature: false,
      testimonial: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' +
                    '  Numquam odio animi debitis repellendus ' +
                    'cumque officia provident quo accusamus.',
    }
  ]
  const emailCopied = (email) =>{
    setEmail(true)
    navigator.clipboard.writeText(email);
    setTimeout(()=>{setEmail(false)},5000)
  }
  return (
    <div className={styles.testimonials} id={'testimonials'}>
      <div className={email ? styles.emailCopied : styles.nonVisibile}> 
        Copied 
      </div>
      <h1> Testimonials </h1>
      <div className={styles.container}>
        {
          data.map((person)=>{
            return(
              <div key={person.name} className={person.feature ? `${styles.card} ${styles.featured} ` : styles.card }>
                <div className={styles.top}>
                  <img 
                    src={'assets/right-arrow.png'} 
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
  )
}
export default Testimonials