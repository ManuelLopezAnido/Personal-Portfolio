import styles from './portfolioContent.module.scss'

const PortfolioContent = (props) => {
  return(
    <div className= {styles.portfolioContent}>
      <div className= {styles.text}>
        {props.content}
      </div>
    </div>
  )
}

export default PortfolioContent