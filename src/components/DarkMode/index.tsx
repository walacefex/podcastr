import styles from './styles.module.scss'

export function DarkMode(){
  function darkmode(){
    document.documentElement.classList.toggle('dark-mode')
  }

  return(
    <form className={styles.darkModeSwitch}>
      <input id="dark-mode" className={styles.lightBulb} type="checkbox" onClick={darkmode} /> 
    </form>
  )
}