import React from 'react';
import styled from 'styled-components';
import { Row, Column } from '../Shared';

const ContactSection = Row.extend`
  position: relative;
  background: white;
  min-height: 500px;
  font-family: ${props => props.theme.headingFont};
  >:first-child {
    img {
      width: 150px;
      height: 200px;
      margin-right: 30px;
    }
  }
  >:last-child {
    flex-basis: 200px;
  }
`
const Headline = styled.div`
  font-size: 1.25em;
  font-weight: 300;
`
const Name = styled.div`
  font-size: 3.2em;
  strong {
    font-weight: 700;
  }
`

const ContactComponent = () =>  (
  <ContactSection>
    <Column>
      <Row>
      <img src={require ('../../assets/trish.png')} alt=""/>
        <div>
          <Headline>
            Founder & Principal Care Provider
          </Headline>
          <Name>
            <strong>Trish Romano</strong> , CLT LMT
          </Name>
          <Headline>
            <table>
              <tbody>
                <tr><td><i className="icon-phone"></i></td><td style={{paddingLeft:'12px'}}>310-283-9382</td></tr>
                <tr><td><i className="icon-mail_outline"></i></td><td style={{paddingLeft:'12px'}}><a href="mailto:trish@mt4w.com">trish@mt4w.com</a></td></tr>
                <tr><td><i className="icon-pin_drop"></i></td><td style={{paddingLeft:'12px'}}>9458 E Ironwood Square Drive, Ste 102</td></tr>
                <tr><td><i></i></td><td style={{paddingLeft:'12px'}}>Scottsdale, AZ 85258</td></tr>
              </tbody>
            </table>
          </Headline>
        </div>
      </Row>
    </Column>
    <Column/>
    
  </ContactSection>
)


export default ContactComponent;
