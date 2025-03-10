import { FirstSection } from "@/components/FirstSection/FirstSection";
import { WorkSection } from "@/components/WorkSection/WorkSection";
import { WorkSectionType } from "@/data/types";
import { MOCKED_EXPERIENCES } from "@/services/mocked-data/jobs";
import { useMemo } from "react";
import styles from './styles.module.css';

export default function Experience() {
  const workExperiences: WorkSectionType[] = MOCKED_EXPERIENCES.sort((a,b) => b.workingYears[0]-a.workingYears[0]);
  const [first, rest] = useMemo(() => {
    return [
      workExperiences.slice(0,1),
      workExperiences.slice(1,workExperiences.length)
    ]
  }, [workExperiences]);

  return (
    <div className={styles.main}>
      <FirstSection key={`first-elem`} {...first[0]}  />
      <div className={styles.sectionsGrid}>
        {
          rest.map((experience, index) => (
            <WorkSection key={`${index}_${experience.workingYears[0]}`} {...experience}  />
          ))
        }
      </div>
    </div>
  )
}