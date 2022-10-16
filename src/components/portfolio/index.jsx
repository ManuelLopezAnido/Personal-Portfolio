import { useState } from 'react'
import styles from './portfolio.module.scss'
import PortfolioContent from './portfolioContent'
import PortfolioList from './portfolioList'
import Fade from 'react-reveal/Fade';
const Portfolio = () => {

  const [selected, setSelected] = useState('aboutme') 
  const list = [
    {
      id:'aboutme',
      title: 'About me',
      content:  <>
                  <p> My name is Manuel Lopez Anido, I’m 26 year and I’m an Industrial Engineer from Rosario, Argentina.</p> 
                  <p>I have been working for almost 4 years as an engineer and developer. As an industrial engineer,
                     I am qualified to understand, improve, automate and optimize the performance of processes and systems. 
                     And trained to work in all types of industries including services and technology.</p>
                  <p>I particularly liked programming and development, so I have specialized in this area during my work experiences.
                     First automating complex processes with Visual Basics For Applications. 
                     Then designing and creating an entire web application for internal use by a large company, 
                     where I am currently working on.</p>
                  <p>I'm a very optimistic, curious and responsible person who enjoys working in teams.
                     I’m truly proactive, I’m amused by learning new knowledge,
                     and I’m always trying to improve and become a better profesional.</p> 
                </>
    },
    {
      id:' studiesandknowledge',
      title: ' Studies and Knowledge',
      content:
              <>
                <p><strong>Industrial Engineer</strong> at National University of Rosario. (2014-2022).</p>
                <p className={styles.webAppT}>Web Developer:</p> 
                <p className={styles.webAppP}> 
                  Frontend:  <i>React, Redux, Typescript, Git, Sass.</i> <br/> 
                  Backend: <i>Node Js, Express, MongoDB.</i> <br/> 
                  Web design: <i>Adobe XD.</i>
                </p>
                <p>I perform very well in doing Microsoft automations using <i>Visual Basic for Application</i></p>
                <p>I also have knowledge of Blockchans. I did my final engineering project about it, which is called “Blockhains and their applications in industries”. </p>
              </>
    },
    {
      id:'workexperience',
      title: 'Work Experience',
      content: 'My experience in Liliana, oh what a company'
    },
    {
      id:'otherexperiences',
      title: 'Other experiences',
      content: 'All experiences, TECHO and maybe the six month exprience living in USA (?'
    },
    {
      id:'languages',
      title: 'Languages',
      content: 'I dont knok that many lengagues, what else should I put here? :/'
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
          />
        </div>
      </div>
    </Fade>
  )
}
export default Portfolio