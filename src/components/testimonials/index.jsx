import styles from './testimonials.module.scss'

const testimonials = ()=>{
  const data = [
    {
      name: 'Heraldo Gerber',
      position: 'Liliana IT Manager',
      testimonial: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' +
                    '  Numquam odio animi debitis repellendus '+
                    'cumque officia provident quo accusamus.',
      image: 'heraldo.jpg',
      feature: false
    },
    {
      name: 'Richard Mitchell',
      feature: false
    },
    {
      name: 'Walter San Marco',
      feature: false
    },
    {
      name: 'Ariel Goldbarg',
    }
  ]
  return (
    <div className={styles.testimonials} id={'testimonials'}>
      <h1> Testimonials </h1>
      <div className={styles.container}>
        {
          data.map((person)=>{
            return(
              <div key={person.name} className={person.feature ? `${styles.card} ${styles.featured} ` : styles.card }>
                <div className={styles.top}>
                  <img src={'assets/right-arrow.png'} alt={''} className={styles.left}/>
                  <img src={'assets/' + person.image } alt={''} className={styles.user}/>
                  <img src={'assets/linkedin.png'} alt={''} className={styles.right}/>
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
export default testimonials