import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Column, Section, SectionTitle, SectionBody, Paragraph } from '../Shared';
import MassageComponent from './MassageComponent';
import MLDComponent from './MLDComponent';
import MyofascialComponent from './MyofascialComponent';
import ServicesComponent from './ServicesComponent';

const ServicesSection = Section.extend.attrs({
  topcolor: props => props.theme.logoBlue,
})``
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
    &.active {
      text-decoration: underline;
    }
  }
`

class ServicesContainer extends React.Component {

  render() {
    return (
      <ServicesSection>
        <nav>
          <StyledList>
          <li><NavLink to="/services/massage">Massage | </NavLink></li>
          <li><NavLink to="/services/lymphatic">Lymphatic Drainage | </NavLink></li>
          <li><NavLink to="/services/myofascial">Myofascial Release</NavLink></li>
          </StyledList>
        </nav>
        <Route exact path="/services" component={ServicesComponent} />
        <Route path='/services/massage' component={MassageComponent} />
        <Route path='/services/lymphatic' component={MLDComponent} />
        <Route path='/services/myofascial' component={MyofascialComponent} />
      </ServicesSection>
    )
  }
}

export default ServicesContainer;
