import { WorkSection } from "@/components/WorkSection/WorkSection";
import { WorkSectionType } from "@/data/types";

export default function Experience() {
  const workExperiences: WorkSectionType[] = [
    {
      title: 'Easystem',
      backgroundColor: '#FFF',
      fontColor: '#000',
      description: 'Worked at Easystem',
      startYear: 2017,
      mainTechs: ["Angular", "Ionic", "Swift", "iOS"]
    },
    {
      title: 'Wize',
      backgroundColor: '#00AA77',
      fontColor: '#FFF',
      description: 'Worked at Wize',
      startYear: 2018,
      mainTechs: []
    },
    {
      title: 'IBM',
      backgroundColor: '#FFF',
      fontColor: '#000',
      description: 'Worked at IBM',
      startYear: 2019,
      mainTechs: []
    },
    {
      title: 'Avenue Code',
      backgroundColor: '#000',
      fontColor: '#FFF',
      description: 'Worked at Avenue Code',
      startYear: 2021,
      mainTechs: []
    },
    {
      title: 'Grover',
      backgroundColor: '#F44',
      fontColor: '#FFF',
      description: 'Worked at Grover',
      startYear: 2022,
      mainTechs: []
    },
  ].sort((a,b) => b.startYear-a.startYear);

  return (
    <div style={{paddingBottom: 30}}>
      {
        workExperiences.map((experience, index) => (
            <WorkSection  key={`${index}_${experience.startYear}`} {...experience}  />
        ))
      }

    </div>
  )
}