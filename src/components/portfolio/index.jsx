import { useState } from 'react'
import styles from './portfolio.module.scss'
import PortfolioContent from './portfolioContent'
import PortfolioList from './portfolioList'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Fade from 'react-reveal/Fade';
const Portfolio = () => {

  const [selected, setSelected] = useState('aboutme') 
  const list = [
    {
      id:'aboutme',
      title: 'About me',
      content: 
      <>
        <p> My name is Manuel Lopez Anido, I’m 26 year and I’m an Industrial Engineer from Rosario, Argentina.</p> 
        <p>I have been working for almost 4 years as an engineer and developer. As an industrial engineer,
            I am qualified to understand, improve, automate and optimize the performance of processes and systems. 
            I'm trained to work in all types of industries including services and technology.</p>
        <p>I particularly liked programming and development, so I have specialized in this area during my work experiences.
            First automating complex processes with Visual Basics For Applications. 
            Then designing and creating an entire web application for internal use by a large company, 
            where I am currently working on.</p>
        <p>I'm a very optimistic, curious, and responsible person who enjoys working in teams.
            I’m truly proactive, I’m amused by learning new knowledge,
            and I’m always trying to improve and become a better professional.</p> 
        <p className={styles.ubication}> 
          <a href={'https://goo.gl/maps/VhACAxURPFLEAzNa9'} rel={'noreferrer'} target={'_blank'}> 
            <LocationOnIcon/> <span>Rosario, Argentina</span>
          </a>
        </p>
      </>
    },
    {
      id:' studiesandknowledge',
      title: ' Studies and Knowledge',
      content:
        <>
          <p><strong>Academic Degree:</strong> Industrial Engineer at Universidad Nacional de Rosario (UNR). (2014-2022).</p>
          <p className={styles.webAppT}>Web Developer:</p> 
          <p className={styles.webAppP}> 
            Frontend:  <i>React, Redux, Typescript, Sass, Adobe XD.</i> <br/> 
            Backend: <i>Node Js, Express, MongoDB.</i> <br/> 
            Version control: <i>Git, GitHub.</i>
          </p>
          <p>I perform very well in doing Microsoft automations using <i>Visual Basic for Application</i></p>
          <p>
            I also have knowledge of Blockchains. 
            I did my final engineering project about it, which is called 
            "Blockchains and their applications in industries”. 
          </p>
          <div className={styles.logoConteiner}>
            <div className={styles.logo}>
              <img  src={'assets/reactLogo.png'} alt={''}/>
            </div>
            <div className={styles.logo}>
              <img  src={'assets/nodejsLogoB.png'} alt={''}/>
            </div>
            <div className={styles.logo}>
              <img  src={'assets/typescriptLogoB.png'} alt={''}/>
            </div>
            <div className={styles.logo}>
              <img  src={'assets/sassLogoB.png'} alt={''}/>
            </div>
            <div className={styles.logo}>
              <img  src={'assets/VBALogoB.png'} alt={''}/>
            </div>
          </div>
        </>
    },
    {
      id:'workexperience',
      title: 'Work Experience',
      content:
        <>
          <p  className={styles.workExpierence}>
            <strong>Engineer at Liliana household appliances company. (Jun 2021 - Present): </strong>
            Developer. 
            In charge of designing, building, updating, improving, and maintaining a web application created from scratch. 
            Both frontend and backend. 
            An application that is used by hundreds of workers every day, in different areas of the company. 
            Mentoring and supervising two junior internship developers who collaborate with the app. 
          </p>
          <p className={styles.workExpierence}>
            Automating and improving complex processes and data management 
            for the company, programming in Visual Basics For Applications
          </p>
          <p className={styles.workExpierence}>
            More about Liliana and the Application in <a href = {'#works'}>next section</a>
          </p>
          <p>
            <strong>Intern for the Municipality of Rosario. (Mar 2019 - Oct 2020): </strong>
            Continual improvement process. 
            Upgrading and innovating processes related to private building licenses in the city.                  
          </p>
          <p>
            <strong>Intern at the engineering consulting company "Goldvarg Ingeniería". (Nov 2017 - Mar 2018): </strong>
            In charge of two improvement projects in different areas 
            at the Nuevo Central Argentino (NCA) railway company. 
          </p>
        </>
    },
    {
      id:'otherexperiences',
      title: 'Volunteering',
      content: 
        <>
          <p className={styles.workExpierence}>
            <strong>Volunteer in the non-governmental organization "TECHO". (Mar 2018 - Present): </strong>
              Builder and coordinator. <a href='https://techo.org' rel={'noreferrer'} target={'_blank'}>TECHO</a> is
              an NGO dedicated to improving the poverty situation of people living in informal settlements.
              Building, among other projects, small houses for homeless people in Rosario. 
          </p>
          <p>
            <strong>Personal training experience living six months in the United States. (Jan - Jul 2012): </strong> 
              Completing the 4th year of high school in Orono, Maine.
              This experience gave me, in addition to a great ability to understand and speak English,
              a capacity for independence and ease with people from different backgrounds and cultures.
          </p>
        </>
    },
    {
      id:'languages',
      title: 'Languages and Hobbies',
      content: 
        <>
          <p>
            <strong>Spanish: </strong>Native speaker
          </p>
          <p>
            <strong>English: </strong>Advanced Level. 
            Cambridge First Certificate English – IATEL 2014. Fluent Speaker
          </p>
          <p>
            <strong>German: </strong>Inicial. 3 years studying at Universidad Nacional de Rosario 
          </p>
          <p>
            <strong>Hobbies: </strong>
            In my free time I enjoy being with friends and practicing sports. 
            I have played water polo for the university team since 2015. 
            I also enjoy playing the asian board game of GO and Chess. 
            On weekends I like to go paddling on the river in my kayak, 
            watch Formula 1 races, and play tennis with my girlfriend.
          </p>
        </>
    },

  ]

  return (
    <Fade>
      <div className={styles.portfolio} id={'portfolio'}>
        <h1>
          Personal Information
        </h1>
        <ul>
          {
            list.map((element) => {
              return (
                <PortfolioList 
                  title = {element.title} 
                  active={selected === element.id} 
                  setSelected={setSelected}
                  id={element.id}
                  key={element.id}
                />
              )
            })
          } 
        </ul>
        <div className={styles.container}>
          <PortfolioContent 
            selected={selected}
            content = {list.find(item=>item.id===selected).content}
            id = {list.find(item=>item.id===selected).id}
          />
        </div>
      </div>
    </Fade>
  )
}
export default Portfolio