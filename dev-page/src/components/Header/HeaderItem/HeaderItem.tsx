import styles from './styles.module.css';

export const HeaderItem = ({name}: {name: string}) => {
  return <div className={styles.container}>
    <span className={styles.title}>{name}</span>
  </div>
}