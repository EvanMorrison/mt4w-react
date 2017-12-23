import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Navbar from './Components/Navbar/Navbar';
import HomeContainer from './Components/Home/Home';

import './main.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div>
            <Navbar />
            <Route path="/" component={HomeContainer} />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App;
