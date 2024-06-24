import Image from "next/image"
import styles from './styles.module.css';
import Link from "next/link";

export const FooterIcon = ({src, url, backgroundColor, alt}: {src: string, backgroundColor?: string, url: string, alt?:string}) => {
  return (
  <div className={styles.wrapper} style={{backgroundColor: backgroundColor ?? 'white'}}>
    <Link target="_blank" href={url}>
      <Image src={src} alt={alt ?? url}  width={26} height={26}/>
    </Link>
  </div>)
}