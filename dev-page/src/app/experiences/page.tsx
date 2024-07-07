import { WorkSection } from "@/components/WorkSection/WorkSection";
import { WorkSectionType } from "@/data/types";
import { MOCKED_EXPERIENCES } from "@/services/mocked-data/jobs";

export default function Experience() {
  const workExperiences: WorkSectionType[] = MOCKED_EXPERIENCES.sort((a,b) => b.workingYears[0]-a.workingYears[0]);
  
  return (
    <div style={{paddingBottom: 30}}>
      {
        workExperiences.map((experience, index) => (
          <WorkSection key={`${index}_${experience.workingYears[0]}`} {...experience}  />
        ))
      }
    </div>
  )
}