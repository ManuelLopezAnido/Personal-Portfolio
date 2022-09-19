import styles from './menu.module.scss'

const Menu = (props) => {
  return(
    <div className = {`${styles.menu} ${(props.barActive ? styles.active : '' )}`}>
      <ul>
        <li onClick = {()=>{props.setBarActive(false)}}>
          <a href='#intro'>
            Home
          </a>
        </li>
        <li onClick = {()=>{props.setBarActive(false)}}> 
          <a href='#portfolio'>
            Portfolio
          </a>
        </li>
        <li onClick = {()=>{props.setBarActive(false)}}>
          <a href='#works'>
            Works
          </a>
        </li>
        <li onClick = {()=>{props.setBarActive(false)}}>
          <a href='#testimonials'>
            Testimonials
          </a>
        </li>
        <li onClick = {()=>{props.setBarActive(false)}}>
          <a href='#contact'>
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}
export default Menu