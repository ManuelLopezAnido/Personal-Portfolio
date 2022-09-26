import { useState } from 'react'
import styles from './contact.module.scss'
const Contact = ()=>{
  const [messege, setMessege] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setMessege(true)
  }
  return (
    <div className={styles.contact} id={'contact'}>
      <div className={styles.left}>
        <img src='assets/shake.svg' alt=''/>
      </div>
      <div className={styles.right}>
        <h2>
          Contact.
        </h2>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Email'/>
            <textarea placeholder='Message'></textarea>
            <button type='submit'>Send</button>
            {messege && <span> Thanks, I'll reply as soon as posible</span>}            
        </form>
      </div>
    </div>
  )
}
export default Contact