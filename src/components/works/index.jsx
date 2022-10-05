import { useState } from 'react'
import styles from './works.module.scss'

const Works = ()=>{
  const [currentSlider, setCurrentSlider] = useState (0)
  console.log(currentSlider)
  const data = [
    {
      id: "1",
      icon: "",
      title: "Imagen 1",
      desc: "loren ipsum mate",
      img: "assets/liliana.jpg"
    },
    {  
      id: "2",
      icon: "",
      title: "Imagen 2",
      desc: "loren ipsum mate",
      img: "assets/lilianaArmado.jpg"
    },
    {  
      id: "3",
      icon: "",
      title: "Imagen 3",
      desc: "loren ipsum mate",
      img: "assets/lilianaInyeccion.jpeg"
    },
    {  
      id: "4",
      icon: "",
      title: "Imagen ",
      desc: "loren ipsum mate",
      img: "assets/lilianaDepositos.jpeg"
    }
  ]
  const handleClick = (type) =>{
    console.log('clicked')
    const len = data.length - 1
    type === 'l' ? 
    currentSlider === 0 ? setCurrentSlider(len) : setCurrentSlider(currentSlider - 1) :
    currentSlider === len ? setCurrentSlider (0) : setCurrentSlider(currentSlider + 1)
  }

   return (
    <div className={styles.works} id={'works'}>
      <div className={styles.title}>
        <h1> My time in Liliana </h1>
      </div>
      <div className={styles.slider} style={{transform: `translateX(-${currentSlider * 100}vw)`}}>
        {
          data.map((d) => {
            return(
              <div className={styles.container} key={d.id}>
                <div className={styles.item} style={{backgroundImage: `url(${d.img})`}}>
                  {/* <img src={d.img} alt={d.title}></img> */}
                  <div className={styles.left}>
                    <div className={styles.leftContainer}>
                      {/* <div className={styles.imgContainer}>
                        <img src={'#'} alt='.'> </img>
                      </div> */}
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
export default Works