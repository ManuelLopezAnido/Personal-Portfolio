import { useState } from 'react'
import styles from './portfolio.module.scss'
import PortfolioContent from './portfolioContent'
import PortfolioList from './portfolioList'
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Portfolio = () => {

  const [selected, setSelected] = useState('aboutme') 
  const list = [
   {
  id: 'aboutme',
  title: 'About Me',
  content:
  <>
    <p>
      My name is Manuel Lopez Anido. I'm an Industrial Engineer from Argentina,
      currently based in Maine, USA.
    </p>

    <p>
      I'm pursuing a Master's degree in Data Science and Engineering
      and a Graduate Certificate in Engineering Applications of Artificial
      Intelligence at the University of Maine.
    </p>

    <p>
      I have over five years of professional experience in engineering and
      software development, building, improving, and maintaining web applications
      for major companies. My background in Industrial Engineering has given me
      a strong foundation in analyzing, optimizing, and automating processes
      and systems across different industries.
    </p>

    <p>
      I am also a Teaching Assistant in the Mathematics Department at the
      University of Maine, where I lead recitation sessions in Calculus,
      Linear Algebra, and Differential Equations.
    </p>
    <p>
      Throughout my career, I've developed a strong interest in programming
      and software development, gaining hands-on experience in frontend and
      backend development, data management, and process automation.
      More recently, I've been expanding my expertise in Data Science,
      Machine Learning, and Artificial Intelligence.
    </p>
    <p>
      I'm an optimistic, curious, and responsible person who enjoys working
      in teams, tackling new challenges, and continuously learning.
      I'm seeking full-time opportunities in AI, Data Science, and Software Engineering, with availability starting in May 2027
    </p>

    <p className={styles.ubication}>
      <a
        href={'https://maps.app.goo.gl/5r1VfruQrJQhFu6Z8'}
        rel={'noreferrer'}
        target={'_blank'}
      >
        <LocationOnIcon/>
        <span>University of Maine, Maine, USA</span>
      </a>
    </p>
  </>
},
    {
      id:' studiesandknowledge',
      title: ' Studies and Knowledge',
      content:
        <>
          <p><strong>Degrees:</strong></p>
          <p className={styles.degree}><strong>Master of Science in Data Science and Engineering</strong> <br/> University of Maine, USA (Aug 2025 – Expected May 2027) </p> 
          <p className={styles.degree}><strong>Graduate Certificate in Engineering Applications of AI</strong> <br/> University of Maine, USA. (Aug 2025 – Expected May 2027)</p>
          <p className={styles.degree}><strong>Industrial Engineer</strong> <br/> Universidad Nacional de Rosario. (Mar 2014- Aug 2022)</p>
          <p className={styles.webAppT}>Technical Skills:</p> 
          <p className={styles.degree}>
            <p className={styles.webAppP}> 
              Data Science & Deep Learning: <i> Python, Pandas, NumPy, PyTorch, Power BI.</i> <br/>
              Frontend:  <i> Typescript, React, Next.js, TanStack Query, Zustand, Tailwind CSS, Sass.</i> <br/> 
              Backend: <i> Node.js, Express, Nest.js, MongoDB, SQL, Zod.</i> <br/> 
            </p>
            <p>I am proficient in Microsoft automations using <i>Visual Basic for Application.</i> I also have industry-relevant knowledge of <i>Blockchains.</i> 
              I researched this topic in-depth for my final engineering project: 
              entitled “Blockchains and Their Applications in Industries.”</p>
          </p>
          <div className={styles.logoConteiner}>
            <div className={styles.logo}>
              <img  src={'assets/logoPython.png'} alt={''}/>
            </div>
            <div className={styles.logo}>
              <img  src={'assets/logoPyTorch.png'} alt={''}/>
            </div>
            <div className={styles.logo}>
              <img  src={'assets/logoPandas.png'} alt={''}/>
            </div>
            <div className={styles.logo}>
              <img  src={'assets/logoReact2.png'} alt={''}/>
            </div>
            <div className={styles.logo}>
              <img  src={'assets/logoNode2.png'} alt={''}/>
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
            <strong> Teaching Assistant, University of Maine, Department of Mathematics. (Sep 2025 – May 2027): </strong>
            Performed recitations, grading, lecture support, and Math Lab oﬃce hours across the following classes:
            Calculus III, Diﬀerential Equations, Linear Algebra, and Precalculus.
          </p>
          <p className={styles.noMarginBottom}>
            <strong> Senior Web Development Engineer at Accenture. (Dec 2022 – Agu 2025): </strong>
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
      id:'languages',
      title: 'Languages',
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
        
        </>
    },
    {
      id:'otherexperiences',
      title: 'Beyond Engineering',
      content: 
        <>
          <p className={styles.noMarginBottom}>
            <strong>Volunteer in the non-governmental organization "TECHO". (Mar 2018 - Oct 2022): </strong>
            Builder and coordinator. <a href='https://techo.org' rel={'noreferrer'} target={'_blank'}>TECHO</a> is
            an NGO dedicated to improving the poverty situation of people living in informal settlements.
            Building, among other projects, emergency housing. 
          </p>
          <p>
            <strong>Hobbies: </strong>
            In my free time, I enjoy spending time with friends and staying active. 
            I played water polo for my university team for several years and currently play at UMaine. 
            I also enjoy playing Go and Chess, as well as taking on programming challenges. 
            On weekends, I like go hiking in Maine, watching Formula 1 races, 
            and go running with my girlfriend.
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