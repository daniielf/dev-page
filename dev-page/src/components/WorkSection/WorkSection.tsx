import { WorkSectionType } from '@/data/types';
import styles from './styles.module.css';
import Image from 'next/image';

export const WorkSection = ({backgroundColor, fontColor,startYear, title, description, bannerURL, mainTechs}: WorkSectionType) => {
  return (
    <div className={styles.section} style={{backgroundColor}}>
      <span style={{color: fontColor}} className={styles.year}>
        {startYear}
      </span>
      <div className={styles.mainContent}>
        {bannerURL && 
          <div className={styles.banner}>
            <Image alt={`Banner of ${title}`} height={400} width={400} src={bannerURL} />
          </div>
        }
        <div className={styles.textContent}>
          <h3 style={{color: fontColor}} className={styles.title}>
            {title}
          </h3>
          <span style={{color: fontColor}} className={styles.description}>
            {description}
          </span>
          <div className={styles.stackContent}>
            <span style={{color: fontColor}} className={styles.mainStackLabel}>
              Main Stacks: 
            </span>
            <span style={{color: fontColor}} className={styles.mainStackValues}>
              {' '}{mainTechs?.join('  ·  ')}

            </span>
          </div>
        </div>
      </div>
    </div>
  )
}