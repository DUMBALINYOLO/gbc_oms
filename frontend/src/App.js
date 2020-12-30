import React from 'react';
import ThemeWrapper, { AppContext } from './theme/ThemeWrapper';
import LandingPage from './containers/landing/LandingPage'
import BlogPage from './containers/Blog/BlogPage';
import CompanyProfile from './containers/Profile/CompanyProfile';
import InformationTechnologyHome from './it/dashboard/InformationTechnologyHome';
import Fees from './it/fees/Fees';

import {Switch, Route} from 'react-router-dom';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

function App() {
  return (
    <ThemeWrapper>
      <AppContext.Consumer>
          {(changeMode) => (
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/itdashboard' component={InformationTechnologyHome} />
            <Route exact path='/itdashboard/fees' component={Fees} />
            <Route exact path='/blog' component={BlogPage} />
            <Route exact path='/profile' component={CompanyProfile} />
          </Switch>
        )}
      </AppContext.Consumer>
    </ThemeWrapper>
  );
}




export default App;
