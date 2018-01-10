import React from 'react';
import { PropTypes } from 'prop-types';
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
    color: ${props => props.position === 1 ? props.theme.contrastText : props.theme.primaryText};
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
    [class^='icon-'] { ${'' /* show menu icons only on mobile */}
      display: ${props => props.isMobile ? 'inline-block' : 'none'};
      color: ${props => props.theme.primaryText} !important;
    }
    &#about {
      margin-top: ${props => props.isMobile && 180}px;
    }
  }
  @media (max-width: 1023px) {
    margin-top: 50px;
    li {
      display: block;
      * {
        font-size: 1.25em;
        line-height: 2em;
      }
    }
  }
`
const Icon = styled.span`
  position: relative;
  left: -8px;
  font-size: 20px !important;
`

class NavMenu extends React.Component {
  state = {
    servicesOpen: false,
    anchorEl: null
  }
  openServicesMenu = event => {
    event.preventDefault();
    this.setState({ servicesOpen: true, anchorEl: this.refs.submenuAnchor});
  }
  closeServicesMenu = event => {
    if (this.props.isDrawerOpen) return;
    else this.setState({ servicesOpen:  false });
  }

  componentWillReceiveProps = (nextProps) => {
    if (!this.props.isDrawerOpen && nextProps.isDrawerOpen) {
      this.setState({servicesOpen: true, anchorEl: this.refs.submenuAnchor});
    } else if (!this.props.isDrawerOpen || !nextProps.isDrawerOpen) {
      this.setState({servicesOpen: false});
    }
  }
  render () {
    return (
      <nav className="navbar">
        <NavList position={this.props.position}
                  isMobile={this.props.isMobile}>
          <li onMouseEnter={this.closeServicesMenu}
              onClick={this.props.handleClick}>
            <NavLink exact={true} to='/'>
              <Icon className="icon-home" />
                  Home
            </NavLink>
          </li>
          <li ref="submenuAnchor"
              onClick={this.openServicesMenu}>
            <NavLink to='/services'
                      onMouseEnter={this.openServicesMenu}>
                      <Icon className="icon-accessibility" />
                      Services
            </NavLink>
          </li>
          <li onMouseEnter={this.closeServicesMenu}
              onClick={this.props.handleClick}
              id="about">
            <NavLink to='/about'>
                  <Icon className="icon-account_circle"/>
                  About
            </NavLink>
          </li>
          <li onMouseEnter={this.closeServicesMenu}
              onClick={this.props.handleClick}>
            <NavLink to='/appointments'>
                  <Icon className="icon-schedule" />
                  Appointments
            </NavLink>
          </li>
          
        </NavList>
        
        <Popover open={this.state.servicesOpen}
                 anchorEl={this.state.anchorEl}
                 anchorOrigin={this.props.anchorOrigin}
                 targetOrigin={this.props.targetOrigin}
                 useLayerForClickAway={false}
                 onRequestClose={ this.closeServicesMenu}>
          <Menu onMouseLeave={this.closeServicesMenu}
                desktop={true}
                onClick={this.props.handleClick}>
            <NavLink to="/services">
              <MenuItem onClick={this.closeServicesMenu} 
                        value={0}
                        primaryText="Services"
                        leftIcon={<Icon className="icon-accessibility"/>}/>
            </NavLink>
            <NavLink to="/services/massage">
              <MenuItem onClick={this.closeServicesMenu} 
                        value={1} 
                        primaryText="Massage"
                        leftIcon={<i className="icon-keyboard_arrow_right"></i>}/>
            </NavLink>
            <NavLink to="/services/lymphatic">
              <MenuItem onClick={this.closeServicesMenu} 
                        value={2} 
                        primaryText="Lymphatic Drainage"
                        leftIcon={<i className="icon-keyboard_arrow_right"></i>}/>
            </NavLink>
            <NavLink to="/services/myofascial">
              <MenuItem onClick={this.closeServicesMenu} 
                        value={3} 
                        primaryText="Myofascial Release"
                        leftIcon={<i className="icon-keyboard_arrow_right"></i>}/>
            </NavLink>
          </Menu>
        </Popover>
        
      </nav>
    )
  }
}

NavMenu.propTypes = {
  isMobile: PropTypes.bool,
  isDrawerOpen: PropTypes.bool,
  position: PropTypes.number.isRequired,
  anchorOrigin: PropTypes.object.isRequired,
  targetOrigin: PropTypes.object.isRequired,
  handleClick: PropTypes.func,
}

export default NavMenu;
