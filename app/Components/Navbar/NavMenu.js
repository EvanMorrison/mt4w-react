import React from 'react';
import { NavLink, Link, Router, withRouter } from 'react-router-dom';
import appState from '../../data/appState';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


class NavMenu extends React.Component {
  state = {
    servicesOpen: false,
    servicesRoutes: [
        appState.homePage.heroPanels[0].route,
        appState.homePage.heroPanels[1].route,
        appState.homePage.heroPanels[2].route
    ]
  }
  openServicesMenu = (event ) => {
    event.preventDefault();
    this.setState({ servicesOpen: true, servicesBtnEl: event.target });
  }
  closeServicesMenu = (event) => {
    this.setState({ servicesOpen: false })
  }

  navigate = (path) => {
    this.props.history.push(path);
    this.closeServicesMenu();
  }


  render () {
    return (
      <div>
        <NavLink exact={true} to="/">
          <FlatButton onClick={() => this.navigate('/')}
                      onMouseEnter={this.closeServicesMenu} 
                      style={{color:'white'}}>
            Home</FlatButton>
        </NavLink>
        <NavLink to="/services">
          <FlatButton style={{color:'white'}} 
              onClick={this.openServicesMenu}
              onMouseEnter={this.openServicesMenu}>
            Services
          </FlatButton>
        </NavLink>
        <Popover open={this.state.servicesOpen}
                 anchorEl={this.state.servicesBtnEl}
                 useLayerForClickAway={false}
                 onRequestClose={ this.closeServicesMenu}
                 >
          <Menu onMouseLeave={this.closeServicesMenu}>
                 
          <NavLink to="/services">
            <MenuItem value={0} primaryText="Services"/>
          </NavLink>
          <NavLink to={this.state.servicesRoutes[0]}>
            <MenuItem value={1} primaryText="Massage"/>
          </NavLink>
          <NavLink to={this.state.servicesRoutes[1]}>
            <MenuItem value={2} primaryText="Lymphatic Drainage"/>
          </NavLink>
          <NavLink to={this.state.servicesRoutes[2]}>
            <MenuItem value={3} primaryText="Myofascial Release"/>
          </NavLink>
          </Menu>
        </Popover>
        <NavLink to="/about">
          <FlatButton style={{color:'white'}}
  
                      onMouseEnter={this.closeServicesMenu}>
              About
          </FlatButton>
        </NavLink>
        <NavLink to="/appointments">
          <FlatButton style={{color:'white'}} 
                      onMouseEnter={this.closeServicesMenu}>
              Appointments
          </FlatButton>
        </NavLink>
      </div>
    )
  }
}

export default withRouter(NavMenu);
