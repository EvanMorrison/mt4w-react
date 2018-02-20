import React from 'react';
import { Section, SectionTitle, SectionBody, Paragraph } from '../../AppStyles';

import EmailForm from './EmailForm';

const AppointmentSection = Section.extend.attrs({
  topcolor: props => props.theme.logoOrange
})``

class AppointmentComponent extends React.Component {
  state = { emailSent: false };

  onEmailSent = () => {
    this.setState({ emailSent: true });
  }

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
          Email: <a href="mailto:trish@mt4w.com">trish@mt4w.com</a>
        </Paragraph>
        <Paragraph>
          - or -
        </Paragraph>
            {(this.state.emailSent ? 
              <Paragraph style={{color:'green',fontWeight:'500'}}>
                Email sent successfully!<br/>
                We will normally get back to you the same or next business day.
              </Paragraph>
            : 
              <React.Fragment >
                <Paragraph>
                  Use this form:
               </Paragraph>
                <EmailForm emailSent={this.state.emailSent} handleEmailSent={this.onEmailSent} />       
              </React.Fragment>
              )}
        
        </SectionBody>
      </AppointmentSection>
    )
  }
}

export default AppointmentComponent;
