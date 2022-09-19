import styles from './portfolioList.module.scss'

const PortfolioList = (props) => {
  return(
    <li 
      className= {`${props.active ? `${styles.portfolioList} ${styles.active}` : styles.portfolioList}`}
      onClick = {()=>props.setSelected(props.id)}  
    >
      {props.title}
    </li>
  )
}

export default PortfolioList