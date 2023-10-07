import { Education } from "./Education"

export const EducationGrid = () => {
  return (
    <div>
        <Education
            title="Liceo Salazar y Herrera"
            role="Bachelor"
            date="Jan 2003 - Nov 2014"
            degree="Bachelor"
            paragraph="Academic high school graduate between 2003 and 2014, reflecting a solid secondary education."
        />
        <Education
            title="Universidad de Antioquía"
            role="Student"
            date="Jan 2017 - Nov 2022"
            degree="Electronic Engineering student"
            paragraph="I was a student of Electronic Engineering from 2017 to 2022 with a change
            of major to Systems Engineering, demonstrating an ability to adapt and a focus on technology
            and problem-solving."
        />
        <Education
            title="Universidad de Antioquía"
            role="Student"
            date="Jan 2022 - Nov 2023"
            degree="Systems Engineering student"
            paragraph="Ongoing student in Systems Engineering for the year 2022 and 2023,
            focused on acquiring key skills and knowledge for problem-solving and innovation
            in information technology."
        />
    </div>
  )
}
