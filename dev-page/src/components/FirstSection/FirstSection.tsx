import { WorkSectionType } from '@/data/types';
import styles from './styles.module.css';
import Image from 'next/image';

export const FirstSection = ({backgroundColor, fontColor, workingYears, title, subtitle,descriptionTopics, bannerURL, mainTechs}: WorkSectionType) => {
  return (
    <div id={title} className={styles.section} style={{backgroundColor}}>
      <div className={styles.leftContent}>
          <div className={styles.banner}>
            <Image alt={`Banner of ${title}`} height={150} width={150} src={"https://prowly-prod.s3.eu-west-1.amazonaws.com/uploads/16071/assets/298987/large-eb4832e84297823740a3c59e741acc59.png"} />
          </div>
        <h3 style={{color: fontColor}} className={styles.title}>
          {title}
        </h3>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.textContent}>
          <div className={styles.subtitleContent}>
            <h5 style={{color: fontColor}} className={styles.subtitle}>
              {subtitle}
            </h5>
            <span className={styles.yearText}>
              {workingYears[0]}
            </span>
          </div>
          <span style={{color: fontColor}} className={styles.description}>
            {descriptionTopics.map((elem, index) => (<p key={`${title}_${workingYears[0]}_${index}`}>{elem}</p>))}
          </span>
          <div className={styles.stackContent}>
            <span style={{color: fontColor}} className={styles.mainStackValues}>
              {' '}{mainTechs?.join('  ·  ')}

            </span>
          </div>
        </div>
      </div>
    </div>
  )
}