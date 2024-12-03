
import AboutSection from '../components/AboutPage/AboutSection'
import TeamSection from '../components/AboutPage/TeamSection'
import AppLayout from '../layout/AppLayout'

const AboutPage = () => {
  return (
    <AppLayout>

    <div className="container mx-auto">

    <AboutSection/>
    <TeamSection/>
    </div>

    </AppLayout>
  )
}

export default AboutPage