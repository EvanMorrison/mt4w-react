import React, { Component } from 'react';
import { Row } from '../../AppStyles';
import NavMenu from './NavMenu';

const DesktopNavWrapper = Row.extend`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  * {
    color: ${props => props.position === 1 ? props.theme.contrastText : props.theme.primary} !important;
  }
  @media (max-width: 1023px) {
    display: none;
  }
`
class DesktopNavComponent extends Component {
  state = {  }
  render() {
    return (
      <DesktopNavWrapper position={this.props.position}>
        <NavMenu  position={this.props.position} 
                  anchorOrigin={{horizontal: 'left', vertical:'bottom'}}
                  targetOrigin={{horizontal: 'left', vertical:'top'}}
                  servicesOpen={false}/>
      </DesktopNavWrapper>
    );
  }
}

export default DesktopNavComponent;
