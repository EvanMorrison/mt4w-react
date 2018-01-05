import React from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import { rgba } from 'polished';
import { Row, Column } from '../Shared';
import NavMenu from './NavMenu';


const CustomNavbar = Row.extend`
  position: sticky;
  top: 0px;
  padding: 0 24px;
  width: 100%;
  z-index: 10;
  background-color: ${props => rgba(props.theme.blueLt, 1)} !important;
  background-image: linear-gradient(to bottom, 
                    ${props => rgba(props.theme.primary,.5)},
                    ${props => rgba(props.theme.primary,.6)} 30%,
                    ${props => rgba(props.theme.primary,.8)} 90%);
  height: 100px !important;
`
const NavbarContentContainer = Row.extend`
  flex: 1;
  overflow: hidden;
  max-width: 1280px;
  margin: auto;
  justify-content: space-between;
`
const BrandGroup = Row.extend`
  position: relative;
  top: ${props => (props.position < .2) ? -90 : (90*props.position < 85) ? 90*props.position - 85 : 0}px;
`
const Logo = styled.img.attrs({
  src: require('../../assets/logo_sm.png')
})`
  height: 80px;
  width: 80px;
  padding: 6px;
  margin-right: 15px;
`
const NavTitle = styled.h1`
  font-family: ${props => props.theme.titleFont};
  font-size: 1.8em;
  color: white;
  width: 8em;
  word-wrap: break-word;
`
const NavSubtitle = styled.h4`
  margin-top: 5px;
  font-family: ${props => props.theme.headingFont};
  color: ${() => rgba('white',.7)};
`
const NavContact = styled.p`
  color: ${() => rgba('white',.87)};
  font-size: 1.2em;
  position: relative;
  align-self: flex-end;
    align-self: center;
    margin: 0 auto 30px;
`
let timeout;

class Navbar extends React.Component {
  state = {
    isNavbarFixed: false
  }



  render() {
    return (
        <CustomNavbar>
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
            <ToolbarGroup>
            <Column>
                <NavContact>Call: 310-283-9382</NavContact>
                <NavMenu/>
              </Column>
            </ToolbarGroup>
          </NavbarContentContainer>
        </CustomNavbar>
    )
  }
}

export default Navbar;