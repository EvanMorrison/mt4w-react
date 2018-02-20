import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Column } from '../../AppStyles';

const Form = styled.form`
  max-width: 38em;
`
const Button = styled(RaisedButton)`
  width: 50px;
`

class EmailForm extends Component {
  state = { message: {name: '', phone: '', email: '', message: ''},
            isEmailSent: false }

  handleChange = event => {
    let message = this.state.message;
    message[event.target.name] = event.target.value;
    this.setState({ message })
  }
  onSubmit = event => {
    event.preventDefault();

    const url = "https://script.google.com/a/manualtherapy4wellness.com/macros/s/AKfycbx6ytReR6wTIlQwIelOVrSD6VAuysoncSv3haaJ8zXZsYOq-p0/exec"
              
    // using Google Apps Script sendEmail to send the form data as an email. 
    // trying $resource did not work, resulting in a cross-origin error. So this is using
    // the plain vanilla XHR
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = () => {
        console.log( xhr.status )
        console.log(xhr.responseText);
        if (xhr.status === 200) {
          // (this.setState({ isEmailSent: true})) ;
          this.props.handleEmailSent();
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
    if (!this.props.emailSent) {  
      return (
        <div>
          <Form onSubmit={this.onSubmit}>
            <Column>
              <TextField type="text" name="name" floatingLabelText="name"
                          value={this.state.message.name}
                          onChange={this.handleChange}/>
              <TextField type="text" name="phone" floatingLabelText="phone"
                          value={this.state.message.phone}
                          onChange={this.handleChange}/>
              <TextField type="text" name="email" floatingLabelText="email"
                          value={this.state.message.email}
                          onChange={this.handleChange}/>
              <TextField name="message" floatingLabelText="message" multiLine={true} rows={1} 
                          value={this.state.message.message}
                          onChange={this.handleChange}/>
              <Button type="submit">
                Send
              </Button>
            </Column>
          </Form>
        </div>
      );
    } else {
      return (
        <div>

        </div>
      )
    }
  }
}

export default EmailForm;
