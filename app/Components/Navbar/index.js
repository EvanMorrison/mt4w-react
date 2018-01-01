import React from 'react';
import styled, {css} from 'styled-components';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import { rgba } from 'polished';
import { Row, Column } from '../Shared';
import NavMenu from './NavMenu';


const CustomNavbar = styled(Toolbar)`
  
  background-color: rgba(${props => props.theme.blueLt},.5) !important;
  background-image: linear-gradient(to bottom, 
                    ${props => rgba(props.theme.primary,.5)},
                    ${props => rgba(props.theme.primary,.7)} 30%,
                    ${props => rgba(props.theme.primary,.8)} 90%,
                    ${props => rgba(props.theme.primary,.4)} 99%);
  height: 100px !important;
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

class Navbar extends React.Component {

  render() {
    return (
      <CustomNavbar >
        <ToolbarGroup>
          <Logo alt="logo"/>
          <Column>
            <NavTitle >
              <em>Manual Therapy For Wellness</em>
            </NavTitle>
            <NavSubtitle>
            Treating Muscle, Fascia, Lymph
            </NavSubtitle>
          </Column>
        </ToolbarGroup>
        <ToolbarGroup>
          
        </ToolbarGroup>
        <ToolbarGroup>
        <Column>
            <NavContact>Call: 310-283-9382</NavContact>
            <NavMenu/>
          </Column>
        </ToolbarGroup>
      </CustomNavbar>
    )
  }
}

export default Navbar;
