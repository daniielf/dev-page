import { WorkSectionType } from '@/data/types';
import styles from './styles.module.css';

export const WorkSection = ({backgroundColor, fontColor, workingYears, title, subtitle,descriptionTopics, bannerColor, mainTechs}: WorkSectionType) => {
  return (
    <div id={title} className={styles.section}>
      <div className={styles.mainContent}>
        <div className={styles.backgroundContent} style={{backgroundColor}}>

          <div className={styles.textContent}>
            {/* TITLE  */}
            <div className={styles.titleContent}>
              <span style={{color: fontColor}} className={styles.title}>
                {title}
              </span>
              <span style={{color: fontColor}} className={styles.year}>
                {workingYears[0]}-{workingYears[1]}
              </span>
            </div>

            {/* BODY */}
            <div className={styles.bodyContent}>
              <h5 style={{color: fontColor}} className={styles.subtitle}>
                {subtitle}
              </h5>
              <span style={{color: fontColor}} className={styles.description}>
                {descriptionTopics.map((elem, index) => (<p key={`${title}_${workingYears[0]}_${index}`}>{elem}</p>))}
              </span>
            </div>

            {/* FOOTER */}
            <div className={styles.footerContent}>
              <div className={styles.stackContent}>
                <span style={{color: fontColor}} className={styles.mainStackValues}>
                  {' '}{mainTechs?.join('  ·  ')}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.foregroundContent} style={{backgroundColor: bannerColor}}>
          <div className={styles.foregroundText}>
            <h3 style={{color: fontColor}} className={styles.foregroundTitle}>
              {title}
            </h3>
            <span style={{color: fontColor}} className={styles.foregroundYear}>
              {workingYears[0]} - {workingYears[1]}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}