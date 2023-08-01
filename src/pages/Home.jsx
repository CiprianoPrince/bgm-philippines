import { AboutUsSection } from "../features/home/components/AboutusSection"
import { HeroSection } from "../features/home/components/HeroSection"
import { OurCultureSection } from "../features/home/components/OurCultureSection"
import { EmployeeTestimonialSection } from "../features/home/components/EmployeeTestimonialSection"
import { WhyJoinUsSection } from "../features/home/components/WhyJoinUsSection"
import { EmployeeBenefitSection } from "../components/EmployeeBenefitSection"
import { TrainingExperienceSection } from "../features/home/components/TrainingExperieceSection"
import { MeetTheTeamSection } from "../components/MeetTheTeamSection"
import { BePartOfTheTeamSection } from "../components/BePartOfTheTeamSection"

function Home() {
  document.title = "BGM Phillipines Inc. | Home"
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <OurCultureSection />
      <EmployeeTestimonialSection />
      <WhyJoinUsSection />
      <EmployeeBenefitSection />
      <TrainingExperienceSection />
      <MeetTheTeamSection />
      <BePartOfTheTeamSection />
    </>
  )
}

export default Home
