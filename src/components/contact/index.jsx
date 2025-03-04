import { useState } from 'react'
import styles from './contact.module.scss'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const Contact = ()=>{
  const [messege, setMessege] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const endpointUrl = "https://public.herotofu.com/v1/d7ba6ee0-f8c5-11ef-a70a-7d18a8d02cc6" 
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const data = 
    {
      'Email': e.target.email.value,
      'Message':e.target.message.value
    };
    fetch(endpointUrl, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // Endpoint thinks that it's likely a spam/bot request, you need to change "spam protection mode" to "never" in HeroTofu forms
        if (response.status === 422) {
          throw new Error("Are you robot?");
        }

        if (response.status !== 200) {
          throw new Error(`${response.statusText} (${response.status})`);
        }
        return response.json();
      })
      .then(() => {
        setMessege(true);
        setLoading(false);
      })
      .catch((err) => {
        setErrorMessage(err.toString())
        setLoading(false);
      });
  };

  return (
    <div className={styles.contact} id={'contact'}>
      <Slide left>
        <div className={styles.left}>
          <img src='assets/shake.svg' alt=''/>
        </div>
      </Slide>
      <Fade>
        <div className={styles.right}>
          <h2>
            Contact.
          </h2>
          <form 
            onSubmit={handleSubmit} 
          >
              <input placeholder='Email' name='email' type='email' required/>
              <textarea placeholder='Message' name='message' required></textarea>
              <button type='submit'>Send</button>
              {messege && <span className={styles.ok}> Thanks, I'll reply as soon as posible </span>}
              {errorMessage && <span className={styles.error}> Sorry, something went wrong. <br/> Contact email: manuellopezanido@gmail.com</span>}
              {loading && <span className={styles.loading}> Loading... </span>}            
          </form>
        </div>
      </Fade>
    </div>
  )
}
export default Contact