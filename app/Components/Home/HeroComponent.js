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
  padding: 80px 0 100px;
  background: transparent;
  :after {
    content: '';
    position: absolute;
    top: -100px;
    left: 0;
    height: calc(100% + 100px);
    width: 100%;
    opacity: 1;
    z-index: -1;
    background-image: linear-gradient(to bottom, 
                            ${() => rgba('#9575CD',.5)} 67%, 
                            ${()=> rgba('#651FFF',.5)});
    ${'' /* background-image: url(${hero}); */}
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
`
class HeroComponent extends React.Component {
  state = {
    panels: appState.homePage.heroPanels
  }

  panelClick = (event, i) => {
    console.log('event ', event)
    console.log('i ', i)
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
