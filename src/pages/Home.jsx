import { AboutUsSection } from "../features/home/components/AboutusSection"
import { HeroSection } from "../features/home/components/HeroSection"
import { OurCultureSection } from "../features/home/components/OurCultureSection"
import { EmployeeTestimonialSection } from "../features/home/components/EmployeeTestimonialSection"
import { EmployeeBenefitSection } from "../features/home/components/EmployeeBenefitSection"
import { TrainingExperienceSection } from "../features/home/components/TrainingExperieceSection"
import { WhyJoinUsSection } from "../features/home/components/WhyJoinUsSection"

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
    </>
  )
}

export default Home
