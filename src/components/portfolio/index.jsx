import { useState } from 'react'
import styles from './portfolio.module.scss'
import PortfolioContent from './portfolioContent'
import PortfolioList from './portfolioList'
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Portfolio = () => {

  const [selected, setSelected] = useState('aboutme') 
  const list = [
    {
      id:'aboutme',
      title: 'About me',
      content: 
      <>
        <p> My name is Manuel Lopez Anido, I’m {new Date().getFullYear() - 1996} years old and I’m an Industrial Engineer and Web Developer from Rosario, Argentina.</p> 
        <p> I have been working for over 4 years as an engineer and developer. Building, improving, and
            maintaining entire web applications for different large companies. As an industrial engineer,
            I am qualified to analyze, improve, automate and optimize the performance of processes and systems. 
            I'm trained to work in diverse industries including services and technology.</p>
        <p> I especially like programming and development, 
            so I have specialized in these areas throughout my career.
            I have experience working on the frontend, backend, data management and automation for important companies in Argentina.</p>
        <p> I'm a very optimistic, curious, and responsible person who enjoys working in teams. 
            I’m motivated by learning new knowledge, 
            and I’m always striving to expand my professional skill set.</p> 
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
            Frontend:  <i> Typescript, React, Next.js, TanStack Query, Zustand, Tailwind CSS, Sass.</i> <br/> 
            Backend: <i> Node.js, Express, Nest.js, MongoDB, SQL, Zod.</i> <br/> 
            Version control: <i>Git, GitHub.</i>
          </p>
          <p>I am highly proficient in Microsoft automations using <i>Visual Basic for Application</i></p>
          <p>
            I also have industry-relevant knowledge of Blockchains. 
            I researched this topic in-depth for my final engineering project: 
            entitled “Blockchains and Their Applications in Industries.”
          </p>
          <div className={styles.logoConteiner}>
            <div className={styles.logo}>
              <img  src={'assets/logoReact.png'} alt={''}/>
            </div>
            <div className={styles.logo}>
              <img  src={'assets/logoNode.png'} alt={''}/>
            </div>
            <div className={styles.logo}>
              <img  src={'assets/logoTypescript.png'} alt={''}/>
            </div>
            <div className={styles.logo}>
              <img  src={'assets/logoNextJs.png'} alt={''}/>
            </div>
            <div className={styles.logo}>
              <img  src={'assets/logoSass.png'} alt={''}/>
            </div>
            <div className={styles.logo}>
              <img  src={'assets/logoNestJs.png'} alt={''}/>
            </div>
          </div>
        </>
    },
    {
      id:'workexperience',
      title: 'Work Experience',
      content:
        <>
          <p className={styles.noMarginBottom}>
            <strong> Senior Web Development Engineer at Accenture. (Dec 2022 – Present): </strong>
            Currently assigned to "Banco Galicia", the most important Accenture client in
            Argentina. Working in an Agile Team, responsible for building and maintaining critical web applications
            that support the bank's day-to-day operations.
          </p>
          <p className={styles.noMargin}>
          Developing the frontend using Next.js and the backend using Nest.js, following the microservice
          architecture.
          </p>
          <p className={styles.noMargin}>
            More about Accenture and Galicia Bank in the <a href = {'#works'}>next section</a>
          </p>
          <p className={styles.noMarginBottom}>
            <strong> Web Development Engineer at Liliana Electrodomesticos company. (Jun 2021 - Dec 2022): </strong>
            Developer in charge of designing, building, updating, improving, and maintaining a web application created from scratch. 
            Both frontend and backend. 
            An application that is used by hundreds of workers every day, in different areas of the company. 
            Mentoring and supervising two junior internship developers who collaborate with the app. 
          </p>
          <p className={styles.noMargin}>
            Automating and improving complex processes and data management 
            for the company, programming in Visual Basics For Applications
          </p>
          <p className={styles.noMargin}>
            More about Liliana and the Application in the <a href = {'#worksLiliana'}>next section</a>
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
          <p className={styles.noMarginBottom}>
            <strong>Volunteer in the non-governmental organization "TECHO". (Mar 2018 - Present): </strong>
            Builder and coordinator. <a href='https://techo.org' rel={'noreferrer'} target={'_blank'}>TECHO</a> is
            an NGO dedicated to improving the poverty situation of people living in informal settlements.
            Building, among other projects, small houses for homeless people in Rosario. 
          </p>
          <p>
            <strong>Personal training experience living six months in the United States. (Jan - Jul 2012): </strong> 
              Completing the 4th year of high school in Orono, Maine.
              This experience gave me, in addition to a great ability to understand and speak English,
              a strong sense of independence and ease with people from different backgrounds and cultures.
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
          <p className={styles.noMarginBottom}>
            <strong>English: </strong>Fluent Speaker. 
          </p>
          <p className={styles.noMargin}> &nbsp;&nbsp;&nbsp;&nbsp; • Cambridge First Certificate in English (FCE) – Grade B, Level B2 – 2014. </p>
          <p className={styles.noMargin}> &nbsp;&nbsp;&nbsp;&nbsp; • TOEFL iBT – 98 out of 120, Level C1 – 2025. </p>
         
          <p>
            <strong>German: </strong>Basic. 3 years studying at Universidad Nacional de Rosario 
          </p>
          <p>
            <strong>Hobbies: </strong>
            In my free time, I enjoy spending time with friends and practicing sports. 
            I played water polo for my university team for several years and currently do CrossFit. 
            I also enjoy playing Go and Chess, as well as taking on programming challenges. 
            On weekends, I like kayaking on the Parana River in Rosario, watching Formula 1 races, 
            and playing tennis with my girlfriend.
          </p>
        </>
    },

  ]

  return (
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
  )
}
export default Portfolio