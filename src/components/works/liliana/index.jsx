import { useState } from 'react'
import styles from './works.module.scss'

const WorkLilana = ()=>{
  const [currentSlider, setCurrentSlider] = useState (0)
  const data = [
    {
      id: "1",
      icon: "",
      title: "The Company",
      desc: 
        <>
          Liliana is a company that designs, 
          manufactures, and markets home appliances throughout Argentina and nearby countries. 
          It has about 1200 employees and produces more than 14000 products per day.
        </> ,
      img: "assets/liliana.jpg"
    },
    {  
      id: "2",
      icon: "",
      title: "TV Totems",
      desc: 
        <>
          Me next to one of the 54 manufacturing cells in Liliana’s factory. 
          Each one with a totem displaying my app full time 
        </>
      ,
      img: "assets/lilianaArmado.jpg"
    },
    {  
      id: "3",
      icon: "",
      title: "Injection machines",
      desc: 
        <>
          Worker using my app on a tablet, 
          uploading data from a plastic injection molding machine. 
          Liliana owns 50 of these, 
          making it the largest machine complex in the country.
        </>
      ,
      img: "assets/lilianaInyeccion.jpeg"
    },
    {  
      id: "4",
      icon: "",
      title: "Traceability record ",
      desc: 
        <>
         Operator at a forklift using the application 
         to record component's movements in the racks. 
         Liliana moves thousands of items per day in different racks
        </>
      ,
      img: "assets/lilianaDepositos.jpeg"
    }
  ]
  const handleClick = (type) =>{
    const len = data.length - 1
    type === 'l' ? 
    currentSlider === 0 ? setCurrentSlider(len) : setCurrentSlider(currentSlider - 1) :
    currentSlider === len ? setCurrentSlider (0) : setCurrentSlider(currentSlider + 1)
  }

   return (
      <div className={styles.works} id={'worksLiliana'}>
        <div className={styles.title}>
          <h1> My time in Liliana </h1>
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
                          <a href={'https://www.liliana.com.ar/'} target={'_blank'} rel={'noreferrer'}>
                            <span>
                              Liliana
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
export default WorkLilana