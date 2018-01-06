import React from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';
import { rgba } from 'polished';
import { Row, Column } from '../Shared';
import NavMenu from './NavMenu';


const CustomNavbar = Row.extend`
  position: fixed;
  top: 0px;
  padding: 0 24px;
  width: 100%;
  z-index: 10;
  background-color: ${props => rgba(props.theme.primary, (props.position === 1 ? .7: 0))} !important;
  ${'' /* background-image: linear-gradient(to bottom, 
                    ${props => rgba(props.theme.primary,.2)},
                    ${props => rgba(props.theme.primary,.4)} 30%,
                    ${props => rgba(props.theme.primary,.6)} 90%); */}
  box-shadow: 0 2px 4px ${props => rgba('#555',(props.position == 1 ? 1 : 0))};
  height: 100px !important;
  transition: all .2s linear;
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
  top: 0px;
  opacity: ${props => props.position == 1 ? 1 : 0};
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
const NavbarGroup = Row.extend`
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
            <NavbarGroup>
            <Column>
                <NavContact>Call: 310-283-9382</NavContact>
                <NavMenu position={this.props.position}/>
              </Column>
            </NavbarGroup>
          </NavbarContentContainer>
        </CustomNavbar>
    )
  }
}

export default Navbar;
