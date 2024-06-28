import Image from 'next/image';
import styles from './styles.module.css';
import { MOCKED_ABOUT_ME } from '@/services/mocked-data/about-me';

type AboutMe = {
  profileURL:string,
  description: string,
}

const IMAGE_SIZE = 240;
export const HomeContent = () => {
  const content: AboutMe = MOCKED_ABOUT_ME;

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <Image className={styles.image} src={content.profileURL} height={IMAGE_SIZE} width={IMAGE_SIZE} style={{borderRadius: IMAGE_SIZE / 2}} alt='Image' />
        <span className={styles.description} dangerouslySetInnerHTML={{__html:content.description }} />
      </div>
    </div>
  )
}