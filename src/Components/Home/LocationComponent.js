import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { Row, Column } from '../Shared';

import Map from './Map';
const bgimage = require ('../../assets/images/relaxation-686392_1920.jpg');
const LocationWrapper = Row.extend`
 min-height: 600px;
 border-radius: 90% 0 0 0 /150px 0 0 0;
 border-top: 12px solid ${props => rgba(props.theme.logoOrange,.8)};
 background-image: linear-gradient(to bottom, 
                      ${props => rgba(props.theme.blueLt,.9)} 67%, 
                      ${props => rgba(props.theme.blueLt,.7)}), url(${bgimage});
 background-size: cover;
`
const SectionHeading = styled.h1`
  font-family: ${props => props.theme.headingFont};
  text-align: center;
  margin-bottom: 80px;
`
class LocationComponent extends React.Component {
  
  render () {
    return (
      <LocationWrapper>
        <Column>
          <SectionHeading>Where to Find Us</SectionHeading>
          <Map />
        </Column>
      </LocationWrapper>
    )
  }
}

export default LocationComponent;
