import { useState } from 'react'
import styles from './works.module.scss'

const WorkAccenture = ()=>{
  const [currentSlider, setCurrentSlider] = useState (0)
  const data = [
    {
      id: "1",
      icon: "",
      title: "The Company",
      desc: 
        <>
          Accenture is a global consulting and technology company that provides digital transformation, 
          software development, and business strategy services. 
          It operates in over 120 countries and serves clients across multiple industries, 
          including finance, healthcare, and manufacturing.
        </> ,
      img: "assets/accenture.jpg",
      link: "https://www.accenture.com",
      span: "Accenture"
    },
    {  
      id: "2",
      icon: "",
      title: "Banco Galicia",
      desc: 
        <>
          Banco Galicia is one of Argentina's largest private banks,
          and the major client of Accenture in Argentina. 
          Galicia offers financial services to individuals and businesses, 
          focusing on innovation and customer experience. 
        </>
      ,
      img: "assets/galicia.webp",
      link: "https://www.bancogalicia.com",
      span: "Galicia"
    },
    {  
      id: "3",
      icon: "",
      title: "Galicia Office",
      desc: 
        <>
          Galicia Office is Banco Galicia's app designed for SMEs and large companies. 
          I am part of the team responsible for developing, 
          maintaining, and managing the linkage and follow-up section of this app.
        </>
      ,
      img: "assets/galicia-office.jpg",
      link: "https://play.google.com/store/apps/details?id=com.galicia.otp",
      span: "Galicia Office"
    },
  ]
  const handleClick = (type) =>{
    const len = data.length - 1
    type === 'l' ? 
    currentSlider === 0 ? setCurrentSlider(len) : setCurrentSlider(currentSlider - 1) :
    currentSlider === len ? setCurrentSlider (0) : setCurrentSlider(currentSlider + 1)
  }

   return (
      <div className={styles.works} id={'works'}>
        <div className={styles.title}>
          <h1> My time in Accenture </h1>
        </div>
          <div className={styles.slider} style={{transform: `translateX(-${currentSlider * 100}vw)`}}>
            {
              data.map((d) => {
                return(
                  <div className={styles.container} key={d.id}>
                    <div className={styles.item} style={{backgroundImage: `url(${d.img})`} }>
                      <div className={styles.left}>
                        <div className={styles.leftContainer}>
                          <h2>{d.title}</h2>
                          <p>
                            {d.desc}
                          </p>
                          <a href={d.link} target={'_blank'} rel={'noreferrer'}>
                            <span>
                              {d.span}
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className={styles.right}>
                      
                      </div>
                    </div>
                  </div>
                )
              })
            }
            
          </div>
        <img 
          src="assets/carruselArrowW.png" alt="arrow" 
          className={`${styles.arrow} ${styles.left}`}
          onClick={() => handleClick('l')}
        />
        <img 
          src="assets/carruselArrowW.png" alt="arrow" 
          className={`${styles.arrow} ${styles.right}`}
          onClick={() => handleClick()}
        />
      </div>
  )
}
export default WorkAccenture