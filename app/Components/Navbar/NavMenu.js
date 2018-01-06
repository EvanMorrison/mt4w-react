import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { rgba } from 'polished';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const NavList = styled.ul`
  list-style: none;
  li {
    display: inline-block;
    color: ${props => props.position === 1 ? 'white' : 'black'};
    margin-right: 2px;
    transition: all .2s linear;
    a {
      display: inline-block;
      padding: 8px 20px;
      border-radius: 3px;
      &:hover, &.active {
        background: ${props => rgba(props.theme.blueLt,.3) };
        transition: all .2s linear;
      }
    }
  }
`

class NavMenu extends React.Component {
  state = {
    servicesOpen: false,
  }
  openServicesMenu = (event ) => {
    event.preventDefault();
    this.setState({ servicesOpen: true, servicesBtnEl: event.target });
  }
  closeServicesMenu = (event) => {
    this.setState({ servicesOpen: false })
  }


  render () {
    return (
      <nav className="navbar">
        <NavList position={this.props.position}>
          <li onMouseEnter={this.closeServicesMenu}>
            <NavLink exact={true} to='/'>Home</NavLink>
          </li>
          <li onClick={this.openServicesMenu}
              onMouseEnter={this.openServicesMenu}>
            <NavLink to='/services'>Services</NavLink>
          </li>
          <li onMouseEnter={this.closeServicesMenu}>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li onMouseEnter={this.closeServicesMenu}>
            <NavLink to='/appointments'>Appointments</NavLink>
          </li>
        </NavList>
        
        <Popover open={this.state.servicesOpen}
                 anchorEl={this.state.servicesBtnEl}
                 useLayerForClickAway={false}
                 onRequestClose={ this.closeServicesMenu}>
          <Menu onMouseLeave={this.closeServicesMenu}>
            <NavLink to="/services">
              <MenuItem value={0} primaryText="Services"/>
            </NavLink>
            <NavLink to="/services/massage">
              <MenuItem value={1} primaryText="Massage"/>
            </NavLink>
            <NavLink to="/services/lymphatic">
              <MenuItem value={2} primaryText="Lymphatic Drainage"/>
            </NavLink>
            <NavLink to="/services/myofascial">
              <MenuItem value={3} primaryText="Myofascial Release"/>
            </NavLink>
          </Menu>
        </Popover>
      </nav>
    )
  }
}

export default NavMenu;
