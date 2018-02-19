import React from 'react';
import { Section, SectionTitle, SectionBody, Paragraph } from '../../AppStyles';

import EmailForm from './EmailForm';

const AppointmentSection = Section.extend.attrs({
  topcolor: props => props.theme.logoOrange
})``

class AppointmentComponent extends React.Component {

  render() {
    return (
      <AppointmentSection>
        <SectionTitle>Appointments</SectionTitle>
        <SectionBody>
        <Paragraph>
          Appointments are available seven days a week. Please contact us to schedule an appointment or to learn more:
        </Paragraph>
        <Paragraph>
          Call or Text: 310-283-9382
        </Paragraph>
        <Paragraph>
          - or -
        </Paragraph>
        <Paragraph>
          Email: <a href="mailto:trish@manualtherapy4wellness.com">trish@manualtherapy4wellness.com</a>
        </Paragraph>
        <Paragraph>
          - or -
        </Paragraph>
        <Paragraph>
            Use this form:
        </Paragraph>
          <EmailForm />
        </SectionBody>
      </AppointmentSection>
    )
  }
}

export default AppointmentComponent;
