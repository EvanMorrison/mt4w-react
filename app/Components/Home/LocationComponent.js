import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { Row, Column } from '../Shared';

import Map from './Map';

const LocationWrapper = Row.extend`
 min-height: 600px;
 border-radius: 90% 0 0 0 /150px 0 0 0;
 background-image: linear-gradient(to bottom, 
                      ${() => rgba('#9575CD',.5)} 67%, 
                      ${()=> rgba('#651FFF',.5)});
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
