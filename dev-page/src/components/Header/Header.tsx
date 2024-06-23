import { HeaderItem } from "./HeaderItem/HeaderItem"
import styles from './styles.module.css';

export const Header = () => {
  return <div className={styles.container}>
    <span className={styles.title}>
      Daniel Freitas 
    </span>
    <div className={styles.menuItems}>
      { 
        ["Home", "Projects"].map((elem, index) => {
          return (
            <>
              {index !== 0 && <div className={styles.separator}></div>}
              <HeaderItem key={elem} name={elem} />
            </>
          )
        })
      }
    </div>
  </div>
}