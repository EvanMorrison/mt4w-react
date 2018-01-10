import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { Row, Column } from '../../AppStyles';

import DesktopNavComponent from './DesktopNavComponent';
import MobileNavComponent from './MobileNavComponent';

const CustomNavbar = Row.extend`
  @media (min-width: 426px) {
    padding: 0 24px;
  }
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 10;
  background-color: ${props => rgba(props.theme.primary, (props.position >= 1 ? .7: 0))} !important;
  ${'' /* background-image: linear-gradient(to bottom, 
                    ${props => rgba(props.theme.primary,.2)},
                    ${props => rgba(props.theme.primary,.4)} 30%,
                    ${props => rgba(props.theme.primary,.6)} 90%); */}
  box-shadow: 0 2px 4px ${props => rgba('#555',(props.position === 1 ? 1 : 0))};
  height: 100px !important;
  transition: all .2s linear;
`
const NavbarContentContainer = Row.extend`
  flex: 1;
  max-width: 1280px;
  margin: auto;
  justify-content: space-between;
`
const BrandGroup = Row.extend`
  transition: all .2s ease-out;
  @media (max-width: 426px) {
    font-size: .8em;

  }
  position: relative;
  top: 0px;
  opacity: ${props => props.position === 1 ? 1 : 0};
`
const Logo = styled.img.attrs({
  src: require('../../assets/logo_sm.png')
})`
  height: 80px;
  width: 80px;
  padding: 6px;
  ${'' /* margin-right: 15px; */}
`
const NavTitle = styled.h1`
  font-family: ${props => props.theme.titleFont};
  font-size: 1.8em;
  color: ${props => props.theme.contrastText};
  width: 8em;
  word-wrap: break-word;
`
const NavSubtitle = styled.h4`
  margin-top: 5px;
  font-family: ${props => props.theme.headingFont};
  color: ${props => props.theme.contrastText};
  min-width: 17em;
`
const NavmenuGroup = Row.extend`

`
const NavContact = styled.p`
  color: ${props => rgba(props.theme.contrastText,.87)};
  font-size: 1.2em;
  position: relative;
  margin: 0 auto 30px;
  @media (max-width: 500px ) {
    display: none;
  }
`


class Navbar extends React.Component {
  state = {
    isNavbarFixed: false,
    isDrawerOpen: false
  }

  toggleDrawer = (evt) => {
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen})
  } 

  render() {
    return (
        <CustomNavbar position={this.props.position}>
          <NavbarContentContainer>
          <BrandGroup position={this.props.position}>
              <Logo alt="logo"/>
              <Column>
                <NavTitle >
                  <em>Manual Therapy For Wellness</em>
                </NavTitle>
                <NavSubtitle>
                Treating Muscle, Fascia, Lymph
                </NavSubtitle>
              </Column>
          </BrandGroup>
          <NavmenuGroup>
              <Column>
                <NavContact>Call: 310-283-9382</NavContact>
                <DesktopNavComponent position={this.props.position}/>
                <MobileNavComponent position={this.props.position}/>
              </Column>
          </NavmenuGroup>

          </NavbarContentContainer>
        </CustomNavbar>
    )
  }
}

export default Navbar;
