import React from 'react';
import { Section, SectionTitle, SectionBody, Paragraph } from '../../AppStyles';

import EmailForm from './EmailForm';

const AppointmentSection = Section.extend.attrs({
  topcolor: props => props.theme.logoOrange
})``

const Message = Paragraph.extend`
  ${'' /* transition: all .3s ease-out; */}
`

class AppointmentComponent extends React.Component {
  state = { 
    message: {
                name: '',
                phone: '',
                email: '',
                message: ''
    },
    emailStatus: 'not sent',
    sending: false
  };

  handleFormInput = event => {
    if (this.state.emailStatus !== 'not sent') this.setState({ emailStatus: 'not sent'})
    let message = this.state.message;
    message[event.target.name] = event.target.value;
    this.setState({ message });
  }

  sendMail = event => {
    event.preventDefault();
    this.setState({ sending: true})

    const url = "https://script.google.com/a/manualtherapy4wellness.com/macros/s/AKfycbx6ytReR6wTIlQwIelOVrSD6VAuysoncSv3haaJ8zXZsYOq-p0/exec"
              
    // using Google Apps Script sendEmail to send the form data as an email. 
    // trying $resource did not work, resulting in a cross-origin error. So this is using
    // the plain vanilla XHR
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = () => {
        // console.log( xhr.status )
        // console.log(xhr.responseText);
        if (xhr.status === 200) {
          this.setState({ emailStatus: 'success', sending: false});
        }
        else {
          this.setState({ emailStatus: 'failed', sending: false});
        }
        return;
    };
    // url encode form data for sending as post data
    const encoded = Object.keys(this.state.message).map(k => {
        return encodeURIComponent(k) + '=' + encodeURIComponent(this.state.message[k])
    }).join('&')
    xhr.send(encoded);
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
        {(this.state.emailStatus === 'success' ? 
          <Message style={{fontWeight:'500'}}>
            Message sent successfully!<br/>
            A confirmation was sent to you at {this.state.message.email}. <br/>
            We will respond to your message soon. Thank you.
          </Message>
        : 
          <React.Fragment>
            {(this.state.emailStatus === 'failed' ? 
              <Message>
                Uh oh, there was a problem sending the message. Please check your network connetion and try again.
              </Message>
              :
              ''
            )}
            <EmailForm message={this.state.message} handleInput={this.handleFormInput} onSubmit={this.sendMail} sending={this.state.sending}/>       
          </React.Fragment>
          )}
        
        </SectionBody>
      </AppointmentSection>
    )
  }
}

export default AppointmentComponent;
