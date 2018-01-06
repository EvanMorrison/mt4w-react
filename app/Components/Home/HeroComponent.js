import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {rgba} from 'polished';
import appState from '../../data/appState';
import hero from '../../assets/images/misc/background-1998454_1920.jpg';
import {theme} from '../../themeStyles';

import PanelComponent from './PanelComponent';

const HeroSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 80px 0 200px;
  background: transparent;
  justify-content: center;
  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: .3;
    z-index: -1;
    background-image: linear-gradient(to bottom, 
                            ${() => rgba('#9575CD',.5)} 67%, 
                            ${()=> rgba('#651FFF',.5)});
    background-image: url(${hero});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-radius: 100% 0 100% 0/ 100px 0 200px 0;
  }
  @media screen and (max-width: 1099px) {
    flex-direction: column;
    align-items: center;
  }
`
class HeroComponent extends React.Component {
  state = {
    panels: appState.homePage.heroPanels
  }

  panelClick = (event, i) => {
    this.props.history.push(this.state.panels[i].route);
  }

  render() {
    const panels = this.state.panels;
    const colors = [theme.logoGreen, theme.logoOrange, theme.logoBlue]
    return (
      <HeroSection>
        {panels.map((p,i) => {
          return <PanelComponent key={i} props={p} color={colors[i]} onClick={(e)=>this.panelClick(e,i)} />
        })}
      </HeroSection>
    )
  }
}

export default withRouter(HeroComponent);
