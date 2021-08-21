// react
import React from 'react'

// project files
import { LeftSection } from './HeroStyles'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'

const Hero = (props) => {
  const handleClick = () => (window.location = 'https://google.com')
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>ADD VALUE PROPOSITION HERE</SectionText>
        <Button onClick={handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  )
}

export default Hero
