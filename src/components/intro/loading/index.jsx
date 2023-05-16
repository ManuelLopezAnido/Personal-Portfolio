import styles from "./loading.module.scss"
const Loading = () => {
  return (
    <div className={styles.dotSpinner}>
      <div className={styles.dotSpinner__dot}></div>
      <div className={styles.dotSpinner__dot}></div>
      <div className={styles.dotSpinner__dot}></div>
      <div className={styles.dotSpinner__dot}></div>
      <div className={styles.dotSpinner__dot}></div>
      <div className={styles.dotSpinner__dot}></div>
      <div className={styles.dotSpinner__dot}></div>
      <div className={styles.dotSpinner__dot}></div>
    </div>

    // <div className={styles.wrapper}>
    //   <div className={styles.circle}></div>
    //   <div className={styles.circle}></div>
    //   <div className={styles.circle}></div>
    //   <div className={styles.shadow}></div>
    //   <div className={styles.shadow}></div>
    //   <div className={styles.shadow}></div>
    // </div>
  )
}
export default Loading