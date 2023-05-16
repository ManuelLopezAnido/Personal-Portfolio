import styles from './portfolioContent.module.scss'

const PortfolioContent = (props) => {
  
  return(
    <div className= {styles.portfolioContent}>
      <div className= {styles.text}>
        {props.content}
      </div>
      {
        props.id === 'studiesandknowledge' ?
        <div>
          Logos
        </div>
        :
        false
      }
    </div>
  )
}

export default PortfolioContent