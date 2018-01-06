import React from 'react';
import styled from 'styled-components';

import { Row, Column } from '../Shared';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 150px;
`
const Brand = styled.div.attrs({
  logo: require ('../../assets/logo_sm.png')
})`
  position: fixed;
  transform-origin: -100px top;
  transform: scale(${props => (1 - props.position > .75) ? 1 - props.position : .75})
             translateY(${props => -23*(props.position)}px)
             translateX(${props => -10*(props.position)}px);
  opacity: ${props => (props.position === 1) ? 0: 1};
  min-width: 7em;
  margin-left: 150px;
  z-index: -1;
  &:after {
    position: absolute;
    content: '';
    width: 100px;
    height: 100px;
    z-index: 10;
    background: no-repeat center/contain url(${props => props.logo});
    top: 0;
    bottom: 0;
    left: -115px;
    margin: auto 0;
  }
`
const BrandName = styled.h1`
  font-family: ${props => props.theme.titleFont};
  font-size: 2.5em;
`
const Tagline = styled.h3`
  font-family: ${props => props.theme.headingFont};
  font-size: 16px;
`


class HeadingComponent extends React.Component {
  render () {
    return (
      <StyledWrapper>
        <Column>
          <Brand position={this.props.position}>
          <BrandName><em>Manual Therapy <br/> For Wellness </em></BrandName>
          <Tagline>Treating Muscle, Fascia, Lymph </Tagline>
          </Brand>
        </Column>

      </StyledWrapper>      
    )
  }
}

export default HeadingComponent;
