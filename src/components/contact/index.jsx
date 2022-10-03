import { useState } from 'react'
import styles from './contact.module.scss'
const Contact = ()=>{
  const [messege, setMessege] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const endpointUrl = "https://public.herotofu.com/v1/56db7ef0-4020-11ed-a06d-cdea678ac864" 
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    console.log('mes send')
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
      <div className={styles.left}>
        <img src='assets/shake.svg' alt=''/>
      </div>
      <div className={styles.right}>
        <h2>
          Contact.
        </h2>
        <form 
          onSubmit={handleSubmit} 
        >
            <input type='text' placeholder='Email' name='email'/>
            <textarea placeholder='Message' name='message'></textarea>
            <button type='submit'>Send</button>
            {messege && <span className={styles.ok}> Thanks, I'll reply as soon as posible </span>}
            {errorMessage && <span className={styles.error}> Sorry, something went wrong. <br/> Contact email: manuellopezanido@gmail.com</span>}
            {loading && <span className={styles.loading}> Loading... </span>}            
        </form>
      </div>
    </div>
  )
}
export default Contact