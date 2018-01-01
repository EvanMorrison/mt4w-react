import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { Row, Column } from '../Shared';

const LocationWrapper = Row.extend`
 min-height: 800px;
 background-image: linear-gradient(to bottom, 
                      ${() => rgba('#9575CD',.5)} 67%, 
                      ${()=> rgba('#651FFF',.5)});
`

class LocationComponent extends React.Component {
  
  render () {
    return (
      <LocationWrapper>
        <h1>Office Location</h1>
      </LocationWrapper>
    )
  }
}

export default LocationComponent;
