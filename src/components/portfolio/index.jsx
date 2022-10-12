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
      content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada eros vitae risus gravida posuere. Donec scelerisque a lectus non posuere. Duis sit amet semper felis, id bibendum nibh. Donec mollis rhoncus fermentum. Duis malesuada ipsum eget leo bibendum mattis. Vestibulum tempus dapibus maximus. Cras vestibulum ut risus non interdum. Mauris non elit eu elit lacinia posuere id ut leo. Quisque interdum turpis sed neque suscipit lobortis. Pellentesque at est erat. Aenean commodo bibendum urna et posuere. Proin velit tortor, molestie eget faucibus vitae, sollicitudin id elit. Quisque porttitor purus a vehicula consequat. Cras sollicitudin posuere varius. Donec eu pretium libero, vitae bibendum turpis. Morbi iaculis tellus non vulputate vulputate. Ut vulputate ullamcorper convallis. Duis ut dui felis'
    },
    {
      id:' studiesandknowledge',
      title: ' Studies and Knowledge',
      content: 'Here goes all my studies'
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