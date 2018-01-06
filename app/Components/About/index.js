import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle, SectionBody, Paragraph } from '../Shared';
import portrait from  '../../assets/trish.png';

const Portrait = styled.img`
  float: left;
  margin: 0 20px 0 0;
  width: 170px;
`

const AboutComponent = () => {

  
    return (
      <Section>
        <SectionTitle>About</SectionTitle>
        <SectionBody>
        <Portrait src={portrait} alt="Trish Romano"/>
          <Paragraph>
            Manual Therapy for Wellness provides a multi-disciplinary approach to health and wellbeing, incorporating massage, lymphatic drainage therapy, and myofascial release.
          </Paragraph>
          <Paragraph>
            Trish Romano, CLT, LMT is the founder of MT4W. Trish was on the original flagship staff of the prestigious Mayo Clinic Department of Integrative Medicine, Phoenix, Arizona, opened March, 2015. There she treated cancer patients in all stages of their progress and healing. Aiming to treat a larger segment of the local population, Trish transitioned into working her private practice full time. Now she treats cancer patients from all over the valley Phoenix/Scottsdale Metropolitan area throughout Maricopa County.
          </Paragraph>
          <Paragraph>
            Trish has collaborated and established referalls with some of the best doctors and other health care providers in Scottsdale and Phoenix. She has over 17 years experience and thousands of hours advanced training. Every client receives personalized care and consultation, taking into account medical history and current needs.
          </Paragraph>
        </SectionBody>
      </Section>
    )
  
}

export default AboutComponent;
