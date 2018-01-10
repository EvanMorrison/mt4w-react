import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Column, Section, SectionTitle, SectionBody, Paragraph } from '../Shared';
import MassageComponent from './MassageComponent';
import MLDComponent from './MLDComponent';
import MyofascialComponent from './MyofascialComponent';

const StyledList = styled.ul`
  list-style: none;
  margin-top: 40px;
  li {
    display: inline-block;
    margin-right: 5px;
    font-size: 18px;
    &:first-child {color: ${props => props.theme.logoGreen};}
    &:nth-child(2) {color: ${props => props.theme.logoOrange};}
    &:last-child {color: ${props => props.theme.logoBlue};}
  }
`

class ServicesComponent extends React.Component {

  render() {
    return (
      <React.Fragment>
        <SectionTitle>Services</SectionTitle>
        <SectionBody>
        <Paragraph>
          Manual Therapy for Wellness provides several services at competetive rates that provide synergistic benefits, relief from pain and stress, improved mobility, strengthened immune system, and reduction of swelling.
        </Paragraph>
        <Paragraph>
          More information will be provided here in the future. But for now please call 310-283-9382 to learn more about what services and packages are available.
        </Paragraph>
        <Paragraph>
          Manual therapy, including massage, makes a wonderful gift. Gift certificates are available for purchase upon request.
        </Paragraph>
        </SectionBody>
      </React.Fragment>
    )
  }
}

export default ServicesComponent;
