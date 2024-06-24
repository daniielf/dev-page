import Link from 'next/link';
import styles from './styles.module.css';

export const HeaderItem = ({name}: {name: string}) => {
  return <div className={styles.container}>
    <Link href={`/${name.toLowerCase()}`} className={styles.title}>{name}</Link>
  </div>
}