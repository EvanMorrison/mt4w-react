import React, { Component } from 'react';
import styled from 'styled-components';
import { rgba } from "polished";
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import NavMenu from './NavMenu';
import { Row } from '../../AppStyles';

import logo from '../../assets/logo_sm.png';

const Navbutton = Row.extend`
  position: relative;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  span {
    color: ${props => props.position === 1 ? props.theme.contrastText : props.theme.primary} !important;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`
const DrawerHeader = Row.extend`
  background: ${props => rgba(props.theme.primary,.8)};

`
const Logo = styled.img.attrs({
  src: logo
})`
  width: 80px;
  height: 80px;
  margin: 20px;
`
class MobileNavComponent extends Component {
  state = { isDrawerOpen: false }

  toggleDrawer = event => {
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen});
  }

  render() {
    return (
      <Navbutton position={this.props.position} >
            <IconButton iconClassName="icon-menu" 
                        styles={{color:'inherit'}}
                        onClick={this.toggleDrawer}>
            </IconButton>
          
          <Drawer open={this.state.isDrawerOpen}
                  docked={false}
                  onRequestChange={isDrawerOpen => this.setState({isDrawerOpen})}>
            <DrawerHeader>
              <Logo />
            </DrawerHeader>
            <NavMenu  position={0}
                      anchorOrigin={{horizontal:'left',vertical:'top'}}
                      targetOrigin={{horizontal:'left',vertical:'top'}}
                      isDrawerOpen={this.state.isDrawerOpen}
                      isMobile={true}
                      handleClick={this.toggleDrawer}/>
          </Drawer>
          </Navbutton>
    );
  }
}

export default MobileNavComponent;
